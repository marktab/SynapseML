// Copyright (C) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See LICENSE in project root for information.

package com.microsoft.azure.synapse.ml.logging

import com.microsoft.azure.synapse.ml.build.BuildInfo
import com.microsoft.azure.synapse.ml.logging.common.SASScrubber
import org.apache.spark.internal.Logging
import spray.json.{DefaultJsonProtocol, RootJsonFormat, NullOptions}

import scala.collection.JavaConverters._
import scala.collection.mutable

case class SynapseMLLogInfo(uid: String,
                            className: String,
                            method: String,
                            buildVersion: String,
                            columns: Option[Int] = None)

object LogJsonProtocol extends DefaultJsonProtocol with NullOptions
{
  implicit val LogFormat: RootJsonFormat[SynapseMLLogInfo] = jsonFormat5(SynapseMLLogInfo)
}

import com.microsoft.azure.synapse.ml.logging.LogJsonProtocol._
import spray.json._

object SynapseMLLogging extends Logging {

  private[ml] val LoggedClasses: mutable.Set[String] = mutable.HashSet[String]()

  def logExternalInfo(uid: String,
                      className: String,
                      methodName: String,
                      extraFields: java.util.HashMap[String, String]): Unit = {
    val mapToPrint = Map(
      "uid" -> uid,
      "className" -> className,
      "methodName" -> methodName).++(extraFields.asScala.toMap)

    SynapseMLLogging.LoggedClasses.add(className)
    logInfo(s"metrics/ ${mapToPrint.toJson.compactPrint}")
  }

  def logMessage(message: String): Unit = {
    val msg = "Test log: {\"alignPolicy\":{},\"endTime\":" +
      "\"2023-04-17T13:00:00Z\",\"slidingWindow\":300,\"" +
      "source\":\"https://usw2itesgprodsa01g8kn8.blob.core.windows.net" +
      "/raw/intermediate%2FFitMultivariateAnomaly_b79685045fba.zip?sv=2020" +
      "-10-02&se=2023-04-19T22%3A45%3A17Z&sr=b&sp=r&SiG=k2N3nSvLtiDH5xBAIwklSf" +
      "yiuJ42aGSAIhLCNWdtNXk%3D\",\"startTime\":\"2020-07-01T00:00:00Z\"}"
    logInfo(msg);
    logInfo(SASScrubber.scrub(message))
  }

}

trait SynapseMLLogging extends Logging {

  val uid: String

  protected def logBase(methodName: String, columns: Option[Int]): Unit = {
    val msg = "Test log: {\"alignPolicy\":{},\"endTime\":" +
      "\"2023-04-17T13:00:00Z\",\"slidingWindow\":300,\"" +
      "source\":\"https://usw2itesgprodsa01g8kn8.blob.core.windows.net" +
      "/raw/intermediate%2FFitMultivariateAnomaly_b79685045fba.zip?sv=2020" +
      "-10-02&se=2023-04-19T22%3A45%3A17Z&sr=b&sp=r&SiG=k2N3nSvLtiDH5xBAIwklSf" +
      "yiuJ42aGSAIhLCNWdtNXk%3D\",\"startTime\":\"2020-07-01T00:00:00Z\"}"
    logInfo(msg);
    logBase(SynapseMLLogInfo(
      uid,
      getClass.toString,
      methodName,
      BuildInfo.version,
      columns))
  }

  protected def logBase(info: SynapseMLLogInfo): Unit = {
    val message: String = info.toJson.compactPrint
    SynapseMLLogging.LoggedClasses.add(info.className)
    logInfo(s"metrics/ $message")
  }

  protected def logErrorBase(methodName: String, e: Exception): Unit = {
    val message: String = SynapseMLLogInfo(uid, getClass.toString, methodName, BuildInfo.version).toJson.compactPrint
    logError(message, e)
  }

  def logClass(): Unit = {
    logBase("constructor", None)
  }

  def logFit[T](f: => T, columns: Int): T = {
    logVerb("fit", f, columns)
  }

  def logTrain[T](f: => T, columns: Int): T = {
    logVerb("train", f, columns)
  }

  def logTransform[T](f: => T, columns: Int): T = {
    logVerb("transform", f, columns)
  }
  def logVerb[T](verb: String, f: => T, columns: Int = -1): T = {
    logBase(verb, if(columns == -1) None else Some(columns))
    try {
      f
    } catch {
      case e: Exception => {
        logErrorBase(verb, e)
        throw e
      }
    }
  }
}

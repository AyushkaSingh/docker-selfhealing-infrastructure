import Docker from "dockerode"
import { logger } from "../utils/logger.js"

const docker = new Docker()

export async function monitorContainers() {

  try {

    const containers = await docker.listContainers({ all: true })

    for (const container of containers) {

      if (container.State !== "running") {

        const containerName = container.Names[0].replace("/", "")

        logger.warn(`Container stopped: ${containerName}`)

        const containerInstance = docker.getContainer(container.Id)

        await containerInstance.restart()

        logger.success(`Container restarted automatically: ${containerName}`)
      }
    }

  } catch (error) {

    logger.error(`Monitoring error: ${error.message}`)

  }

}
import { config } from "./config/config.js"
import { logger } from "./utils/logger.js"
import { monitorContainers } from "./services/containerMonitor.js"

logger.info("Docker Self-Healing Infrastructure Monitor Started")

setInterval(() => {

  monitorContainers()

}, config.monitorInterval)
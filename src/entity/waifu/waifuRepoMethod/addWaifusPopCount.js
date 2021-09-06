const BackgroundRunner = require('~common/utils/BackgroundRunner')
const WaifuModel = require('../WaifuModel')

/**
 * @param {Map<String, Number>} waifuPopMap
 */
exports.addWaifusPopCount = async function (waifuPopMap) {
  const helper = new IncBulkHelper()
  for (const [waifuId, popCount] of waifuPopMap.entries()) {
    helper.incPopCount(waifuId, popCount)
  }
}

class IncBulkHelper {
  constructor () {
    if (IncBulkHelper.instance) return IncBulkHelper.instance

    IncBulkHelper.instance = this
    /**
     * @type {Map<String, Number>}
     */
    this.map = new Map()

    setTimeout(() => {
      IncBulkHelper.instance = undefined
      BackgroundRunner.run(this.writeToDb.bind(this))
    }, 100)
  }

  incPopCount (waifuId, incCount) {
    const count = this.map.get(waifuId) || 0
    this.map.set(waifuId, count + incCount)
  }

  async writeToDb () {
    const writes = []
    for (const [waifuId, popCount] of this.map.entries()) {
      writes.push({
        updateOne: {
          filter: { _id: waifuId },
          update: { $inc: { popCount } }
        }
      })
    }

    await WaifuModel.bulkWrite(writes, { ordered: false })
  }
}

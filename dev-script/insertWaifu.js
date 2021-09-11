const { disconnectRedis } = require('~common/connection/redis')
const Mongodb = require('~common/connection/Mongodb')
const WaifuRepo = require('~entity/waifu/WaifuRepo')

async function run () {
  await Mongodb.connect()
  await insertWaifu()
  await Mongodb.disconnect()
  await disconnectRedis()
}

async function insertWaifu () {
  await WaifuRepo.upsertWaifu({
    urlId: 'no15',
    name: '十五號',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yYmR0t5.png',
        imgPopUrl: 'https://i.imgur.com/cmFYQri.png',
        imgIconUrl: 'https://i.imgur.com/Qq6Cp1U.png',
        imgInfo: 'picture from PopLeopardCat ( https://no15rescute.github.io/PopLeopardCat/ )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-a.mp3',
        audioInfo: 'audio from PopLeopardCat ( https://no15rescute.github.io/PopLeopardCat/ )'
      },
      {
        modeName: 'one-two',
        imgNormalUrl: 'https://i.imgur.com/0rFGRui.png',
        imgPopUrl: 'https://i.imgur.com/GsxuGZN.png',
        imgIconUrl: 'https://i.imgur.com/qi8osxh.png',
        imgInfo: 'https://youtu.be/QEQntL4Bb14',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-two.mp3',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-one.mp3',
        audioInfo: 'https://youtu.be/QEQntL4Bb14'
      },
      {
        modeName: 'no150',
        imgNormalUrl: 'https://i.imgur.com/Sh5gP3C.png',
        imgPopUrl: 'https://i.imgur.com/bPgAvRY.png',
        imgIconUrl: 'https://i.imgur.com/RZuyVHs.png',
        imgInfo: 'https://youtu.be/J4kvgE3bEPA?t=6452',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-150-2.mp3',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/15-150-1.mp3',
        audioInfo: 'https://youtu.be/J4kvgE3bEPA?t=6452'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'annin-miru',
    name: '杏仁ミル',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yWz4gP1.png',
        imgPopUrl: 'https://i.imgur.com/P5DjSxE.png',
        imgIconUrl: 'https://i.imgur.com/UHPLtzv.png',
        imgInfo: 'picture from 杏仁ミル twitter ( https://twitter.com/AnninMirudayo/status/1422580442876715008 ) ( https://twitter.com/AnninMirudayo/status/1421945176872742913 )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/miru-a-2.mp3',
        audioInfo: 'https://youtu.be/19sRmPz6HIY?t=22'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'miku',
    name: '初音ミク',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/w50ILOk.jpg',
        imgPopUrl: 'https://i.imgur.com/8jOQjgL.jpg',
        imgIconUrl: 'https://i.imgur.com/meOjXSc.png',
        imgInfo: 'picture from pixiv: 千夜QYS3 ( https://www.pixiv.net/artworks/56710319 )',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/miku-meow-2.mp3',
        audioInfo: 'https://youtu.be/kS2yWmLCtnc?t=44'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ubye',
    name: '悠白',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/yO9r0QX.png',
        imgPopUrl: 'https://i.imgur.com/1QCbJpr.png',
        imgIconUrl: 'https://i.imgur.com/aNbJ5eV.png',
        imgInfo: 'https://youtu.be/jXW6zlzLCGg?t=3585',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ubye-a.mp3',
        audioInfo: 'https://youtu.be/kA6oIG9ulVs?t=3'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'gura',
    name: 'Gawr Gura',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/G47Ea40.png',
        imgPopUrl: 'https://i.imgur.com/tly5u3M.png',
        imgIconUrl: 'https://i.imgur.com/bGuWlhS.png',
        imgInfo: 'https://youtu.be/dBK0gKW61NU?t=213',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/gura-a.mp3',
        audioInfo: 'https://youtu.be/dBK0gKW61NU?t=220'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'shirakami-fubuki',
    name: '白上フブキ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/1dXI4bn.png',
        imgPopUrl: 'https://i.imgur.com/ecFG33p.png',
        imgIconUrl: 'https://i.imgur.com/jvtlEsd.png',
        imgInfo: 'https://en.hololive.tv/portfolio/items/shirakami-fubuki',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/shirakami-fubuki-nya.mp3',
        audioInfo: 'https://youtu.be/kQXc80jgk-E?t=7654'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'dio',
    name: 'DIO',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/tdCsOD3.png',
        imgPopUrl: 'https://i.imgur.com/RCpRHu6.png',
        imgIconUrl: 'https://i.imgur.com/tdCsOD3.png',
        imgInfo: 'unknown, but seems from JoJo Part 3'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'coco',
    name: '桐生ココ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/bydcGFC.png',
        imgPopUrl: 'https://i.imgur.com/kdJyMuB.png',
        imgIconUrl: 'https://i.imgur.com/kdJyMuB.png',
        imgInfo: 'https://virtualyoutuber.fandom.com/wiki/Kiryu_Coco/Gallery',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/coco-next-meme.mp3',
        audioInfo: 'https://youtu.be/-AGhA-GaZ_o?t=25'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'minato-aqua',
    name: '湊あくあ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/9Xdi8O1.jpg',
        imgPopUrl: 'https://i.imgur.com/lvB1h1i.jpg',
        imgIconUrl: 'https://i.imgur.com/poPJZ8S.png',
        imgInfo: 'https://youtu.be/rddmVGgem2Q',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/minato-aqua-nya.mp3',
        audioInfo: 'https://youtu.be/rddmVGgem2Q'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'rayer',
    name: '蕾兒',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/XM6yUUU.png',
        imgPopUrl: 'https://i.imgur.com/zIBcFwy.png',
        imgIconUrl: 'https://i.imgur.com/zIBcFwy.png',
        imgInfo: 'https://youtu.be/W9xiniyF2Zk',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/rayer-pop.mp3',
        audioInfo: 'https://youtu.be/W9xiniyF2Zk'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'padko',
    name: '平平子',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/3FBEBVL.jpg',
        imgPopUrl: 'https://i.imgur.com/VQEWET6.jpg',
        imgIconUrl: 'https://i.imgur.com/xrypgmh.png',
        imgInfo: 'https://youtu.be/Z4iRCaUsQx0',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/padko-1.mp3',
        audioInfo: 'https://youtu.be/BjOQD6j9Zyc?t=9233'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'gojo-masaru',
    name: '五条勝',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/t8MR5ju.png',
        imgPopUrl: 'https://i.imgur.com/Sxlf2fU.png',
        imgIconUrl: 'https://i.imgur.com/AeNdaD2.png',
        imgInfo: 'https://youtu.be/K9_A35uCpYA'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'beta-hoonie',
    name: 'β虎妮',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ZcnpKP1.png',
        imgPopUrl: 'https://i.imgur.com/FCasd4b.png',
        imgIconUrl: 'https://i.imgur.com/fWlFr6q.png',
        imgInfo: 'https://youtu.be/8DepX5_8k2E',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/beta-hoonie-pop.mp3',
        audioInfo: 'https://youtu.be/8DepX5_8k2E'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'hu-tao',
    name: '胡桃',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/BzcRfrd.jpg',
        imgPopUrl: 'https://i.imgur.com/NB3Zaze.jpg',
        imgIconUrl: 'https://i.imgur.com/ArXQXwF.png',
        imgInfo: 'https://www.pixiv.net/artworks/92049927',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/hu-tao-pop.mp3',
        audioInfo: 'from Genshin Impact PC'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'lancee',
    name: '蘭希LanCee',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/Hb7eDiq.png',
        imgPopUrl: 'https://i.imgur.com/Wmt52Vf.png',
        imgIconUrl: 'https://i.imgur.com/j4osERO.png',
        imgInfo: 'https://www.youtube.com/watch?v=M7Ym_4ngeT8&t=2387s',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/lancee-pop.mp3',
        audioInfo: 'https://www.youtube.com/watch?v=M7Ym_4ngeT8&t=2387s'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'ayame',
    name: '百鬼あやめ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/fnkYIDH.jpg',
        imgPopUrl: 'https://i.imgur.com/gKremaa.jpg',
        imgIconUrl: 'https://i.imgur.com/8tZit6E.png',
        imgInfo: 'https://youtu.be/05VuFmvHjNY',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ayame-yodazo.mp3',
        audioNormalUrl: 'https://softwaresing.github.io/popwaifu-file/audio/ayame-yodayo.mp3',
        audioInfo: 'https://youtu.be/05VuFmvHjNY & https://youtu.be/hlH6iNcEvq8'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'patra',
    name: '周防パトラ',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/fngi9Il.png',
        imgPopUrl: 'https://i.imgur.com/H8J0BNy.png',
        imgIconUrl: 'https://i.imgur.com/waHRKCT.png',
        imgInfo: 'https://twitter.com/Patra_HNST/status/1431010128438784003',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/patra-pop.mp3',
        audioInfo: 'https://twitter.com/Patra_HNST/status/1429850594504679436'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'lumina',
    name: 'Lumina',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/0Yx8d1g.png',
        imgPopUrl: 'https://i.imgur.com/nyVDYir.png',
        imgIconUrl: 'https://i.imgur.com/QVVwFXT.png',
        imgInfo: 'https://youtu.be/1c2gGgQbbOE?t=207',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/lumina-pop.mp3',
        audioInfo: 'https://youtu.be/1c2gGgQbbOE?t=207'
      }
    ]
  })
  await WaifuRepo.upsertWaifu({
    urlId: 'boru',
    name: '毬庫波爾',
    modeConfigList: [
      {
        modeName: 'default',
        imgNormalUrl: 'https://i.imgur.com/ecqpAXe.png',
        imgPopUrl: 'https://i.imgur.com/YyJTGT0.png',
        imgIconUrl: 'https://i.imgur.com/b4tgOmH.png',
        imgInfo: 'https://youtu.be/5cQn-G3PGMA',
        audioPopUrl: 'https://softwaresing.github.io/popwaifu-file/audio/boru-pop.mp3',
        audioInfo: 'vtuber herself'
      }
    ]
  })
  // for (let i = 0; i < 200; i += 1) {
  //   await WaifuRepo.upsertWaifu({
  //     urlId: `${Math.random()}${Date.now()}`.slice(2),
  //     name: `${Math.random()}`,
  //     modeConfigList: [
  //       {
  //         modeName: 'default',
  //         imgNormalUrl: 'https://i.imgur.com/w50ILOk.jpg',
  //         imgPopUrl: 'https://i.imgur.com/8jOQjgL.jpg',
  //         imgInfo: `${Date.now()}${Math.random()}`
  //       }
  //     ]
  //   })
  // }
}

run()

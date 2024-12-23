const productData = [
    {
        id: 1,
        img: '/images/oleimages/1OleLynggaardLotus1GreyMoonstoneRing.png',
        category: "olelynggard",
        title: 'Product 1',
        desc: 'A brief description of Product 1',
        newPrice: '1999.99',
        oldPrice: '2999.99',
        onSale: true,
      },
      {
        id: 2,
        img: '/images/oleimages/2OleLynggaardLotus1RutileQuartzRing.png',
        category: "rings",
        title: 'Product 2',
        desc: 'A designer moonstone diamond-encrusted ring',
        newPrice: '1499.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      {
        id: 3,
        img: '/images/oleimages/21375OLeLynggaardLotus2WhiteMoonstoneRing_384x549.png',
        category: "rings",
        title: 'Product 3',
        desc: 'A designer moonstone diamond-encrusted ring',
        newPrice: '4999.99',
        oldPrice: '5499.99',
        onSale: true,
      },
      {
        id: 4,
        img: '/images/oleimages/OleLynggaardNature18KYGPaveDiamondEarringPendant-Large.png',
        category: "earrings",
        title: 'Product 4',
        desc: 'A brief description of Product 2',
        newPrice: '899.99',
        oldPrice: '999.99',
        onSale: true,
      },
      {
        id: 5,
        img: '/images/oleimages/21385OleLynggaardLotusGreyMoonstoneDiamondRing.png',
        category: "rings",
        title: 'OleLynggaardGreyMoonstone',
        desc: 'A designer moonstone diamond-encrusted ring',
        newPrice: '799.99',
        oldPrice: '899.99',
        onSale: true,
      },
      {
        id: 6,
        img: '/images/oleimages/21387OleLynggaardLotusWhiteMoonstoneDiamondRing.png',
        category: "rings",
        title: 'Product 6',
        desc: 'A brief description of Product 2',
        newPrice: '1499.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      {
        id: 7,
        img: '/images/oleimages/OleLynggaardSnakes18KYGPaveDiamondRing.png',
        category: "rings",
        title: 'Product 7',
        desc: 'A designer moonstone diamond-encrusted ring',
        newPrice: '1499.99',
        oldPrice: '59.99',
        onSale: true,
      },
      {
        id: 8,
        img: '/images/oleimages/25129OleLynggaard18KYGSerpentineAcornCharmonDesign.png',
        category: "necklaces",
        title: 'OleLynggaardSerpentAcorn',
        desc: 'A designer serpentine charm necklace',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 9,
        img: '/images/necklaces/SethiCoutureCrescent18KYGSmallWhiteDiamondMoonPendant.png',
        category: "necklaces",
        title: 'Sethi Couture Cres',
        desc: 'A diamond moon pendant',
        newPrice: '1299.99',
        oldPrice: '1499.99',
        onSale: true,
      },
      {
        id: 10,
        img: '/images/necklaces/SethiCoutureNoirMediumBlackDiamondNecklace.png',
        category: "necklaces",
        title: 'SethiCoutureBlackDiamond',
        desc: 'MediumBlackDiamondNecklace',
        newPrice: '1499.99',
        oldPrice: '1799.99',
        onSale: true,
      },
      {
        id: 11,
        img: '/images/necklaces/SethiCouture14KYellowGoldPaperClipChain.png',
        category: "necklaces",
        title: 'SethiCouture14KGoldChain',
        desc: 'A Yellow Gold PaperClip Chain',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 12,
        img: '/images/necklaces/Sethi_Couture_18KYG_Enchanted_Garden_Triple_Flower_White_Diamond_Necklace.png',
        category: "necklaces",
        title: 'Sethi_Couture_Enchanted',
        desc: 'Triple_Flower_White_Diamond_Necklace',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 13,
        img: '/images/necklaces/MessikaMove18KYGPaveDiamondNecklace.png',
        category: "necklaces",
        title: 'MessikaPaveDiamond',
        desc: '18K YGPave Diamond Necklace',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 14,
        img: '/images/necklaces/OleLynggaardShootingStars18KYG4StarDiamondNecklace.png',
        category: "necklaces",
        title: 'OleLynggaardShootingStar',
        desc: '18KYG4Star Diamond Necklace',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 15,
        img: '/images/necklaces/KCDesigns14KWGDiamondStarofDavidPendantNecklace.png',
        category: "necklaces",
        title: 'KCDiamondStarofDavid',
        desc: '14KWGDiamondStarofDavidPendantNecklace',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 16,
        img: '/images/necklaces/MessikaBabyMove18KRoseGoldDiamondNecklace.png',
        category: "necklaces",
        title: 'Messika18KRoseGold',
        desc: '18KRoseGoldDiamondNecklace',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 17,
        img: '/images/necklaces/KCDesigns14KWGDiamondPawNecklace.png',
        category: "necklaces",
        title: 'KCGDiamondPaw',
        desc: 'A KCDesigns14KWG DiamondPaw Necklace',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 18,
        img: '/images/necklaces/27781OleLynggaardChainStyleIdeas.png',
        category: "necklaces",
        title: 'OleLynggaardChain',
        desc: 'A OleLynggaard Chain',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 19,
        img: '/images/necklaces/27781OleLynggaardDesignCollier18KYGChainNecklace.png',
        category: "necklaces",
        title: 'OleLynggaardCollierChain',
        desc: 'OleLynggaardCollier18KYGChainNecklace',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 20,
        img : '/images/dering/17613FurrerJacotTorinoSplitShoulder.jpg',
        category: "diamonds",
        title: 'FurrerJacotTorinoSplit',
        desc: 'A Jacot Torino Split Shoulder ',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 21,
        img : '/images/dering/22506SethiCouture18KRGRopeBand.png',
        category: "diamonds",
        title: 'SethiCoutureRopeBand',
        desc: 'A SethiCouture rope band ',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 22,
        img : '/images/dering/22509SethiCouture18KWGDiamondClusterBand_1967R.jpg',
        category: "diamonds",
        title: 'SethiCoutureDiamondCluster ',
        desc: 'A SethiCouture Diamond Clusterband',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 23,
        img : '/images/dering/25378SethiTire18krgDiamondEternityBand.jpg',
        category: "diamonds",
        title: 'SethiTireEternityBand',
        desc: 'A SethiTire Diamond EternityBand ',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 24,
        img : '/images/dering/25422ParadeDesignPlatinumCushionHaloDiamondSemi-MountRing.png',
        category: "diamonds",
        title: 'PlatinumCushionHalo',
        desc: 'A Platinum Diamond semi-mountring ',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 25,
        img : '/images/sale/5857KBrunini18KYGDiamondDoubleAntlerRing.png',
        category: "diamonds",
        title: 'Brunini_Diamond',
        desc: 'A Brunini_Diamond DoubleAntler ring',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 26,
        img : '/images/dering/Oster_Collection_Platinum_Pave_Split-Shank_Starburst_Diamond_Ring.png',
        category: "diamonds",
        title: 'Starburst_Diamond',
        desc: 'A Platinum Starburst_Diamond ring ',
        newPrice: '1899.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      {
        id: 27,
        img : '/images/dering/Oster_Collection_Platinum_Trinity_Emerald_Cut_Diamond_Ring.png',
        category: "diamonds",
        title: 'Trinity_Emerald_Diamond',
        desc: 'A checkered long-sleeved shirt ',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 28,
        img : '/images/dering/Sethi_Couture_Dunes_Narrow_18KYG_Diamond_Brushed_Band.png',
        category: "diamonds",
        title: 'Sethi_Couture narrow Diamond ',
        desc: 'A Narrow 18KYGDiamond_Brushed_Band',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 29,
        img : '/images/dering/SethiCoutureYellowGoldStack.jpg',
        category: "diamonds",
        title: 'SethiGoldStack',
        desc: 'A SethiCouture diamond GoldStack ',
        newPrice: '1999.99',
        oldPrice: '1999.99',
        onSale: false,
      },
      {
        id: 30,
        img : '/images/sale/10756-14kYGPaveDiaPebbleNeclace.jpg',
        category: "necklaces",
        title: 'PaveDiaPebbleNecklace',
        desc: 'A PaveDia Pebble Necklace ',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 31,
        img : '/images/sale/LaNouvelleBagueBlackEnamelFloralDiamondBangle.png',
        category: "diamonds",
        title: 'LaNouvelleBague',
        desc: 'A LaNouvelle floral diamond bangle ',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 32,
        img : '/images/sale/PomellatoVictoria18KRoseGoldFacetedBlackJetDropEarrings.png',
        category: "earrings",
        title: 'PomellatoVicGoldEarring',
        desc: 'A Pomellato RoseGoldEarrings',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 33,
        img : '/images/sale/StefanHafnerClusterAirDiamondEarrings.png',
        category: "diamonds",
        title: 'StefanHafner Earring',
        desc: 'A StefanHafner Cluster Earring',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 34,
        img : '/images/sale/PrecisionSet18KBlackenedGoldPaveDiamondDomedBand.jpg',
        category: "diamonds",
        title: 'BlackGoldPaveDiamond',
        desc: 'A Black GoldPave 18K Diamond band ',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 35,
        img : '/images/watches/22828BRV293GMTBlkGry.jpg',
        category: "watches",
        title: 'Bell and Ross',
        desc: 'A Bell and Ross GMT Automatic',
        newPrice: '2499.99',
        oldPrice: '2999.99',
        onSale: true,
      },
      {
        id: 36,
        img : '/images/oleimages/21400OLCGipsyMiniGoldStuds.jpg',
        category: "earrings",
        title: 'GipsyMiniGoldStuds',
        desc: 'A Gipsy Mini GoldStuds ',
        newPrice: '399.99',
        oldPrice: '499.99',
        onSale: false,
      },
      {
        id: 37,
        img : '/images/necklaces/MessikaMoveUno18KRGDiamondNecklace.png',
        category: "necklaces",
        title: 'MessikaDiamondNecklace',
        desc: 'A Messika 18K Diamond Necklace',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 38,
        img : '/images/oleimages/21566OleLynggaardForest18KYGPaveDiamondAcornPendant.png',
        category: "earrings",
        title: 'OleLyngardPendant',
        desc: 'A 18KYGPave DiamondAcorn Pendant ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 39,
        img : '/images/oleimages/22011OleLynggaardLotus18KRGRutileQuartzDiamondRing.png',
        category: "rings",
        title: 'OleLyngardRutileRing',
        desc: 'A OleLyngard Rutile Diamond Ring',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 40,
        img : '/images/sale/10238VictorVelyanDafne24KYGChromeDiopsideEarrings.png',
        category: "earrings",
        title: 'VictorVelyanChromeEarrings',
        desc: 'A Victor Velyan Chrome Diop Diamond Earring ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 41,
        img : '/images/sale/10243VictorVelyanArdianda24KYGRosecutDiamondEarrings.png',
        category: "earrings",
        title: 'VictorVelyanRosecutEarrings',
        desc: 'A Victor Velyan Rosecut Diamond Earring ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 42,
        img : '/images/sale/10654VictorVelyanManne24KYGChromeDiopsideDiamondDropEarrings.png',
        category: "earrings",
        title: 'VictorVelyanDropEarrings',
        desc: 'A Victor Velyan DiamondDrop Earring ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 43,
        img : '/images/sale/10753Mo_MeLargePaveDiamondCutoutDangleEarrings.png',
        category: "earrings",
        title: 'PaveDiamondCutoutEarrings',
        desc: 'A PaveDiamond Cutout DangleEarring',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 44,
        img : '/images/sale/15990CynthiaAnnFiligreeTurquoiseTeardropEarringJackets.png',
        category: "earrings",
        title: 'CynthiaAnnTeardropEarrings',
        desc: 'A CynthiaAnn Turquoise TeardropEarring ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 45,
        img : '/images/dering/2286718KWGRopeBand.png',
        category: "earrings",
        title: '18K Rope Band',
        desc: 'An 18K Rope Band ',
        newPrice: '999.99',
        oldPrice: '1199.99',
        onSale: false,
      },
      {
        id: 46,
        img : '/images/sale/AlexSoldier-SunflowerEarrings.png',
        category: "earrings",
        title: 'SunflowerEarrings',
        desc: 'A AlexSoldier Sunflower Earring',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 47,
        img : '/images/oleimages/25063OleLynnggaardForestLargeAcornPendant.png',
        category: "necklaces",
        title: 'OleLynnggaardAcorn',
        desc: 'A OleLynnggaard Acorn Pendant ',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 48,
        img : '/images/oleimages/25129OleLynggaard18KYGSerpentineAcornCharmonDesignString.png',
        category: "necklaces",
        title: 'OleLynngardSerpentString',
        desc: 'A OleLynnggaard Serpent Acorn String ',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 49,
        img : '/images/oleimages/26165OleLynggaardCreol18KYGDiamondLeafEarrings.png',
        category: "earrings",
        title: 'OleLynggaardLeafEarrings',
        desc: 'A OleLynggaard Diamond Leaf Earring ',
        newPrice: '1499.99',
        oldPrice: '1499.99',
        onSale: false,
      },
      {
        id: 50,
        img : '/images/oleimages/26508OleLynggaardBoHo18KYGLargeAquamarineRing.png',
        category: "rings",
        title: 'OleLynggaardAquaRing',
        desc: 'An OleLynggaard Aquamarine Ring',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 51,
        img : '/images/oleimages/LotusRutilatedQuartzandMoonstoneRings.png',
        category: "rings",
        title: 'QuartzandMoonstoneRing',
        desc: 'A Lotus Quartz and Moonstone Ring ',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 52,
        img : '/images/oleimages/ole1.png',
        category: "earrings",
        title: 'OleLynggaardDarkRing',
        desc: 'A OleLynggaard DarkStone Ring ',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 53,
        img : '/images/sale/17429FurrerJacotStainlessSteelWideDiamondInlayEternityBand.png',
        category: "rings",
        title: 'FurrerJacotDiamondBand',
        desc: 'A FurrerJacot Diamond inlay Eternity Band',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 54,
        img : '/images/sale/18997FurrerJacot18KRGCarbonFiberDiamondHalfBand.png',
        category: "rings",
        title: 'FurrerJacotDiamondhalfBand',
        desc: 'A FurrerJacot CarbonFiber Diamond half Band',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 55,
        img : '/images/sale/AlexSoldierSNAILRingUpRight.jpg',
        category: "rings",
        title: 'AlexSoldierSNAILRing',
        desc: 'An AlexSoldier SNAIL Ring',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 56,
        img : '/images/rings/AnneSportunGreyRosecutPearDiamondRing.png',
        category: "rings",
        title: 'AnneSportunPearDiamond',
        desc: 'An AnneSportun Rosecut Pear Diamond',
        newPrice: '1499.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 57,
        img : '/images/rings/AnneSportun18KRGDiamondMiniEternityBandStack_SoldSeparately.png',
        category: "rings",
        title: 'AnneSportunMiniDiamond',
        desc: 'An AnneSportun Diamond Mini Eternity Band ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: false,
      },
      {
        id: 58,
        img : '/images/rings/26021FurrerJacot18KYellowGoldDiamondWavesBand.png',
        category: "diamonds",
        title: 'FurrerJacotGoldDiamond',
        desc: 'A FurrerJacot Gold Diamond waves band',
        newPrice: '1899.99',
        oldPrice: '2199.99',
        onSale: true,
      },
      {
        id: 59,
        img : '/images/rings/21721FurrerJacot18KWhiteGoldAnthraciteGeometricBand.png',
        category: "rings",
        title: 'FurrerJacotWhiteGoldBand',
        desc: 'A FurrerJacot White-Gold Diamond Band ',
        newPrice: '1599.99',
        oldPrice: '1599.99',
        onSale: true,
      },
      {
        id: 60,
        img : '/images/rings/19043AnneSportun18kygDiamondEternityBand.jpg',
        category: "diamonds",
        title: 'AnneSportunEternityBand',
        desc: 'An AnneSportun 18K Eternity Band',
        newPrice: '1799.99',
        oldPrice: '1899.99',
        onSale: true,
      },
      {
        id: 61,
        img : '/images/15057FurrerJacot18KWRGTwo-ToneDiamondEternityBand.png',
        category: "rings",
        title: 'FurrerJacotTwo-ToneBand',
        desc: 'A FurrerJacot Two-Tone Diamond Band',
        newPrice: '1899.99',
        oldPrice: '1899.99',
        onSale: false,
      },
      {
        id: 62,
        img : '/images/sale/CynthiaAnnBeatriceWhiteTopaz_ChampagneDiamondNecklace.png',
        category: "necklaces",
        title: 'CynthiaAnnWhiteDiamond',
        desc: 'A CynthiaAnn Topaz_Champagne Diamond nacklace',
        newPrice: '1699.99',
        oldPrice: '1899.99',
        onSale: true,
      },
      {
        id: 63,
        img : '/images/watches/567NOMOSAhoiNeomatikAtlantic36mm.png',
        category: "watches",
        title: 'NOMOSAhoiAtlantic36mm',
        desc: 'A NOMOS Ahoi Neomatik Atlantic 36mm',
        newPrice: '1899.99',
        oldPrice: '1899.99',
        onSale: false,
      },
      {
        id: 64,
        img : '/images/watches/22316NOMOSTngente41UpdateSilver.png',
        category: "watches",
        title: 'NOMOSTngente41',
        desc: 'A NOMOS Tngente41 Silver Watch',
        newPrice: '1899.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      {
        id: 65,
        img : '/images/watches/26052Bell_RossBR03-92onRubberStrap.png',
        category: "watches",
        title: 'Bell_RossonRubber',
        desc: 'A Bell_RossonRubber Strap Watch',
        newPrice: '1899.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      {
        id: 66,
        img : '/images/watches/NOMOSAhoiNeomatikSirenWhite.png',
        category: "watches",
        title: 'NOMOSAhoiSirenWhite',
        desc: 'A NOMOSAhoiSirenWhite',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 67,
        img : '/images/watches/NOMOSClubSportNeomatik34Gold.png',
        category: "watches",
        title: 'NOMOSNeomatik34Gold',
        desc: 'A NOMOS Club Sport NeomatikGold Watch',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 68,
        img : '/images/watches/NOMOSClubSportNeomatik34Rose.png',
        category: "watches",
        title: 'NOMOSNeomatik34Rose',
        desc: 'A NOMOS Club Sport NeomatikRose Watch',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 69,
        img : '/images/watches/NOMOSOrionNeomatik41DateNewBlack.png',
        category: "watches",
        title: 'NOMOSOrionDateBlack',
        desc: 'A NOMOS Orion Neomatik Date Black Watch',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 70,
        img : '/images/watches/NOMOSTetraDieWildentschlossene.png',
        category: "watches",
        title: 'NOMOSTetraDieWild',
        desc: 'A NOMOS Tetra DieWildent Watch',
        newPrice: '2499.99',
        oldPrice: '2499.99',
        onSale: false,
      },
      {
        id: 71,
        img : '/images/watches/NOMOSTangente38.png',
        category: "watches",
        title: 'NOMOSTangente38',
        desc: 'A NOMOS Tangente 38 Silver Watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 72,
        img : '/images/watches/Bell_RossBR-X5BlackTitaniumBracelet.png',
        category: "watches",
        title: 'Bell_RossTitaniumBracelet',
        desc: 'A Bell_Ross Titanium Bracelet Watch ',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 73,
        img : '/images/watches/Bell_RossBR03-92DiverTaraBlue.png',
        category: "watches",
        title: 'Bell_RossDiverTaraBlue',
        desc: 'A Bell_Ross Diver Tara Blue Watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 74,
        img : '/images/watches/Bell_RossBR05BlackCeramicBracelet.png',
        category: "watches",
        title: 'Bell_RossCeramicBracelet',
        desc: 'A Bell_Ross Black Ceramic Bracelet',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 75,
        img : '/images/watches/Bell_RossBR05GreenChronoonRubberStrap.png',
        category: "watches",
        title: 'Bell_RossGreenChronoon',
        desc: 'A Bell_Ross Green Chronoon Watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 76,
        img : '/images/watches/Bell_RossBR05SkeletonBlackCeramicRubber.png',
        category: "watches",
        title: 'Bell_RossBR05Skeleton 20',
        desc: 'Black Ceramic Rubber ',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 77,
        img : '/images/watches/Bell_RossNewBR03BlackSteel.png',
        category: "watches",
        title: 'Bell_RossNewBR03BlackSteel',
        desc: 'A Black steel watch ',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 78,
        img : '/images/watches/Bell_RossNewBR03Copper.png',
        category: "watches",
        title: 'Bell_RossNewBR03Copper',
        desc: 'A Bell_Ross New Copper Watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 79,
        img : '/images/watches/Bell_RossBR05SkeletonBlackLumCeramic.png',
        category: "watches",
        title: 'BellRossSkeletonBlackCeramic',
        desc: 'A Bell_Ross Skeleton Black Luminous Watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 80,
        img : '/images/watches/Bell_RossBR-03CyberCeramic.png',
        category: "watches",
        title: 'Bell_RossCyberCeramic',
        desc: 'A Bell_Ross Cyber Ceramic Watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 81,
        img : '/images/oleimages/OleLynggaardEarrings.png',
        category: "olelynggard",
        title: 'OleLynggaardEarrings',
        desc: 'An OleLynggaard Earrings',
        newPrice: '1499.99',
        oldPrice: '1799.99',
        onSale: true,
      },
      {
        id: 82,
        img : '/images/oleimages/OleLynggaardLeaves18KYGPaveDiamondLeafRing.png',
        category: "olelynggard",
        title: 'OlelyngardDiamondRing',
        desc: 'An Olelynggard DiamondLeaf Ring',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 83,
        img : '/images/oleimages/OleLynggaardForest18KRose_YellowGoldAcornPendant.png',
        category: "olelynggard",
        title: 'OlelynggardAcornPendant',
        desc: 'An Olelynggard Gold Acorn Pendant',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 84,
        img : '/images/oleimages/OleLynggaardNature18KYGLargeHoopEarrings.png',
        category: "olelynggard",
        title: 'OlelynggardLargeHoops',
        desc: 'A Olelynggard Large Hoop Earrings ',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 85,
        img : '/images/oleimages/OleLynggaardSnakes18KYGPaveDiamond_RutileQuartzSnakeRing.png',
        category: "olelynggard",
        title: 'OlelynggardSnakeRing',
        desc: 'A Olelynggard PaveDiamond Snake Ring',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 86,
        img : '/images/oleimages/OleLynggaardNature18KYGPaveDiamondEarring.png',
        category: "olelynggard",
        title: 'OlelynggardPaveEarring',
        desc: 'An Olelynggard Diamond Pave Earring',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 87,
        img : '/images/rings/5803AdolfoCourrier18KWGDiamond_BlueTopazButterflyRing.png',
        category: "rings",
        title: 'AdolfoCourrierBlueTopazRing',
        desc: 'A Adolfo Courrier Blue Topaz Ring',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 88,
        img : '/images/bell-watches/7767Bell_RossCabronDeskStand.png',
        category: "bens",
        title: 'Bell_RossCabron',
        desc: 'A Bell_Ross Cabron Watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 89,
        img : '/images/bell-watches/22828BRV293GMTBlkGry.jpg',
        category: "bens",
        title: 'bell-watch ',
        desc: 'A bell watch series',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 90,
        img : '/images/bell-watches/22609Bell_RossBR03-92DiverBlueDial.png',
        category: "bens",
        title: 'Bell_RossBlueDial',
        desc: 'A Bell_Ross Diver Blue Dial watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 91,
        img : '/images/bell-watches/24066Bell_RossBR05AutoBlueRubberStrap.jpg',
        category: "bens",
        title: 'Bell_RossBlueStrap',
        desc: 'A Bell_Ross Auto Blue Strap watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 92,
        img : '/images/bell-watches/25672Bell_RossBR03-92GMTTurnbezel.png',
        category: "bens",
        title: 'Bell_RossTurnbezel',
        desc: 'A Bell_Ross Turn bezel watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 93,
        img : '/images/bell-watches/26053Bell_RossBR03DiverBrownBronzeonLeatherStrap.png',
        category: "bens",
        title: 'Bell_RossBrownBronze',
        desc: 'A Bell_Ross Diver Brown Bronze on Leather Strap watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 94,
        img : '/images/bell-watches/26236Bell_RossBR05GMT.png',
        category: "bens",
        title: 'Bell_RossSilverBlack',
        desc: 'A Bell_Ross Diver Silver Black on Leather Strap watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 95,
        img : '/images/bell-watches/26752Bell_RossBR05GMTSilveronStrap.png',
        category: "bens",
        title: 'Bell_RossSilverBronze',
        desc: 'A Bell_Ross Diver Silver Bronze on Leather Strap watch',
        newPrice: '2299.99',
        oldPrice: '2299.99',
        onSale: false,
      },
      {
        id: 96,
        img : '/images/bell-watches/26752Bell_RossBR05GMTSilveronStrap.png',
        category: "bens",
        title:' Bell_RossSilverStrap',
        desc: 'A Bell_Ross Silver on Strap watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 97,
        img : '/images/bell-watches/27128Bell_RossBR03-92BronzeDiverBronzeWhite.png',
        category: "bens",
        title: 'Bell_RossDiverBronze',
        desc: 'A Bell_Ross Diver Bronze white watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 98,
        img : '/images/bell-watches/27281Bell_RossBR-X5CarbonOrange.png',
        category: "bens",
        title: 'Bell_RossCarbonOrange',
        desc: 'A Bell_Ross Carbon Orange watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 99,
        img : '/images/bell-watches/Bell_Ross_BR_03_Diver_Full_Lum_Ceramic.png',
        category: "bens",
        title: 'Bell_RossDiverLuminous',
        desc: 'A Bell_Ross Diver FullLuminous watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 100,
        img : '/images/bell-watches/Bell_RossBR-03CyberCeramic.png',
        category: "bens",
        title: 'Bell_RossCyberCeramic',
        desc: 'A Bell_Ross Cyber Ceramic watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 101,
        img : '/images/bell-watches/Bell_RossBR-X5BlackTitaniumBracelet.png',
        category: "bens",
        title: 'Bell_RossBlackTitanium',
        desc: 'A Bell_Ross Black Titanium watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 102,
        img : '/images/bell-watches/Bell_RossBR03-92DiverTaraBlue.png',
        category: "bens",
        title: 'Bell_RossDiverTara',
        desc: 'A Bell_Ross Diver Tara Blue watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 103,
        img : '/images/bell-watches/Bell_Rossbr03-94BlackSteelChrono.png',
        category: "bens",
        title: 'Bell_RossSteelChrono',
        desc: 'A Bell_Ross Black Steel Chrono watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 104,
        img : '/images/bell-watches/Bell_RossBR05GreenChronoonRubberStrap.png',
        category: "bens",
        title: 'Bell_RossGreenChrono',
        desc: 'A Bell_Ross Green Chronoon Rubber Strap watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 105,
        img : '/images/bell-watches/Bell_RossBR05SkeletonBlackCeramicRubber.png',
        category: "bens",
        title: 'Bell_RossSkeletonBlack',
        desc: 'A Bell_Ross Skeleton Black Ceramic Rubber watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 106,
        img : '/images/bell-watches/Bell_RossNewBR03Copper.png',
        category: "bens",
        title: 'Bell_RossNewCopper',
        desc: 'A Bell_Ross New Copper watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 107,
        img : '/images/bell-watches/Bell_RossBR-X5BlackTitaniumBracelet-Lum.png',
        category: "bens",
        title: 'Bell_RossTitaniumBracelet',
        desc: 'A Bell_Ross Titanium Bracelet watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 108,
        img : '/images/bell-watches/Bell_RossNewBR03BlackSteel.png',
        category: "bens",
        title: 'Bell_RossBlackSteelBracelet',
        desc: 'A Bell_Ross Black Steel Bracelet watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 109,
        img : '/images/bell-watches/26052Bell_RossBR03-92onRubberStrap.png',
        category: "bens",
        title: 'Bell_RossBlackonRubberStrap',
        desc: 'A Bell_Ross Black on Rubber Strap watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 110,
        img : '/images/bell-watches/24066Bell_RossBR05AutoBlueRubberStrap.jpg',
        category: "bens",
        title: 'Bell_RossAutoBlueStrap',
        desc: 'A Bell_Ross Auto Blue Rubber on Strap watch',
        newPrice: '2299.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 110,
        img : '/images/watches/NOMOSTangente2DateBlue.png',
        category: "nomos",
        title: 'NOMOSTangente2DateBlue',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 111,
        img : '/images/watches/NOMOSOrionNeomatik41DateNewBlack.png',
        category: "nomos",
        title: 'NOMOSTangente2DateBlue',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 112,
        img : '/images/watches/NOMOSOrionNeomatik39NewBlack.png',
        category: "nomos",
        title: 'ClubSportNeomatik34Rose',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 113,
        img : '/images/watches/NOMOSOrionNeomatik41Date175YearsWatchmakingGlashutte.png',
        category: "nomos",
        title: 'ClubSportNeomatik34Rose',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 114,
        img : '/images/watches/NOMOSClubSportNeomatik34Rose.png',
        category: "nomos",
        title: 'ClubSportNeomatik34Rose',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 115,
        img : '/images/watches/NOMOSClubSportNeomatik34Gold.png',
        category: "nomos",
        title: 'ClubSportNeomatik34Gold',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 116,
        img : '/images/watches/NOMOSAhoiNeomatikSirenWhite.png',
        category: "nomos",
        title: 'NeomatikSirenWhite',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch ',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 117,
        img : '/images/watches/NOMOSAhoiNeomatik38DateSky.png',
        category: "nomos",
        title: 'NOMOSAhoiNeomatik38DateSky',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch',
        newPrice: '1999.99',
        oldPrice: '2499.99',
        onSale: true,
      },
      {
        id: 118,
        img : '/images/NOMOSAhoiNeomatik38DateAtlantic.png',
        category: "nomos",
        title: 'Neomatik38DateAtlantic',
        desc: ' NOMOS AhoiNeomatik38 date Atlantic watch',
        newPrice: '1799.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      {
        id: 119,
        img : '/images/NOMOSAhoiNeomatik38DateSand.png',
        category: "nomos",
        title: 'NOMOSAhoiNeomatik38',
        desc: 'NOMOS AhoiNeomatik38 date Sand watch ',
        newPrice: '1799.99',
        oldPrice: '1999.99',
        onSale: true,
      },
      // Add more products as needed

];

export default productData;
const products = [
    {
        name:"Nike Dunk Low Retro",
        modelName:"White Black Panda (2021)",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1644250003&h=320&q=80",
        price:236,
        countInStock:10,
        category:["Sneaker","Popular"],
        sytleID:"DD1391-100",
        colorway:"WHITE/BLACK",
        releaseDate:"03/10/2021",
        retailPrice:110,
        description:"From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design's inception in 1985."+
        "But with each new colorway, the Dunk's classic color-blocking has remained in some capacity." +
        "Nike put its timeless color-blocking to work with the Nike Dunk Low Retro White Black.",
        rating:5,
        numReviews:9
    },
    {
        name:"adidas Yeezy Foam RNR",
        modelName:"Onyx",
        thumbnailUrl:"https://images.stockx.com/360/adidas-Yeezy-Foam-RNNR-Onyx/Images/adidas-Yeezy-Foam-RNNR-Onyx/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1654263493&h=384&q=57",
        price:157,
        countInStock:20,
        category:["Sneaker","Popular"],
        sytleID:"HP8739",
        colorway:"ONYX/ONYX/ONYX",
        releaseDate:"06/08/2022",
        retailPrice:80,
        description:"The adidas Yeezy Foam RNR Onyx arrives with an Onyx, oval-cut foam construction made of part EVA and"+
        "algae. At the base, a cushioned footbed offers comfort and support, while a sculptural sole with deep treads" +
        "provides traction.",
        rating:5,
        numReviews:8 
    },
    {
        name:"Jordan 1 Retro High OG",
        modelName:"Visionaire",
        thumbnailUrl:"https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Visionaire.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1654610623&q=57",
        price:183,
        countInStock:5,
        category:["Sneaker","Popular"],
        sytleID:"555088-702",
        colorway:"VOLT/BLACK/SAIL",
        releaseDate:"06/11/2022",
        retailPrice:170,
        description:"The Air Jordan 1 High Visionaire features a smooth white leather upper with black leather collars, neon"+
        "yellow overlays, and black Swooshes. A classic Jordan Wings logo at the collar and Nike woven tongue" +
        "labels nod to the OG 1985 design. From there, an off-white and black Air sole adds the finishing touch.",
        rating:4,
        numReviews: 12
    },
    {
        name:"Nike Air Force 1 Low '07",
        modelName:"White",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635275427&h=384&q=57",
        price:100,
        countInStock:30,
        category:["Sneaker","Popular"],
        sytleID:"315122-111/CW2288-111",
        colorway:"WHITE/WHITE",
        releaseDate:"11/24/2007",
        retailPrice:90,
        description:"The Nike Air Force 1 Low White ‘07 features an all-white leather upper with a perforated toe box and"+
        "Swoosh overlays. A Nike heel embroidery and white sole completes the design." +
        "The Nike Air Force 1 Low White ‘07 originally released in 2007, but since it is an essential colorway to the brand, it consistently restocks.",
        rating:4,
        numReviews: 2
    },
    {
        name:"adidas Yeezy Slide",
        modelName:"Ochre",
        thumbnailUrl:"https://images.stockx.com/360/adidas-Yeezy-Slide-Ochre/Images/adidas-Yeezy-Slide-Ochre/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1638569630&h=384&q=57",
        price:116,
        countInStock:8,
        category:["Sneaker"],
        sytleID:"GW1931",
        colorway:"OCHRE/OCHRE/OCHRE",
        releaseDate:"12/13/2021",
        retailPrice:60,
        description:"The adidas Yeezy Slide Ochre is constructed entirely of EVA foam in a monochromatic fashion. A soft"+
        "footbed offers immediate step-in comfort for daily wear. From there, deep groove treads on the sole" +
        "provide traction and support.",
        rating:5,
        numReviews: 4 
    },
    {
        name:"adidas Yeezy Boost 350 V2",
        modelName:"Beluga Reflective",
        thumbnailUrl:"https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Beluga-Reflective/Images/adidas-Yeezy-Boost-350-V2-Beluga-Reflective/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1638994537&h=384&q=57",
        price:207,
        countInStock:15,
        category:["Sneaker"],
        sytleID:"GW1229",
        colorway:"REFLECTIVE/STEEPLE GREY/SOLAR RED",
        releaseDate:"12/18/2021",
        retailPrice:240,
        description:"One of Yeezy's most celebrated designs received a reflective makeover with the adidas Yeezy Boost 350 V2 Beluga Reflective."+
        "The adidas Yeezy Boost 350 V2 Beluga Reflective builds off of the original Beluga colorway by adding" +
        "reflective qualities and speckled orange accents to its Primeknit upper. Signature details like a Boost sole and orange side stripe complete the design.",
        rating:5,
        numReviews: 6 
    },
    {
        name:"Adidas Adilette 22 Slides",
        modelName:"Grey",
        thumbnailUrl:"https://images.stockx.com/images/adidas-Adilette-22-Slides-Grey.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1654149027&q=57",
        price:76,
        countInStock:30,
        category:["Sneaker"],
        sytleID:"GX6950",
        colorway:"GREY/GREY/GREY",
        releaseDate:"",
        retailPrice:55,
        description:"As part of the adidas Originals Spring / Summer 2022 collection, the adidas Adilette 22 Grey features a grooved light grey foam construction that boasts a look reminiscent of eroded sediment. On the lateral"+
        "side of the sole, text that reads 'The Brand With The Three Stripes' nods to adidas' logo. From there, a" +
        "soft footbed adds comfort and support.",
        rating:6,
        numReviews: 12 
    },
    {
        name:"Jordan 9 Retro",
        modelName:"Chile Red",
        thumbnailUrl:"https://images.stockx.com/360/Air-Jordan-9-Retro-Chile-Red/Images/Air-Jordan-9-Retro-Chile-Red/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1652820888&h=384&q=57",
        price:211,
        countInStock:50,
        category:["Sneaker"],
        sytleID:"CT8019-600",
        colorway:"CHILE RED/BLACK",
        releaseDate:"05/07/2022",
        retailPrice:200,
        description:"The Air Jordan 9 Chile Red arrives with a Chile Red Durabuck construction with matching patent leather"+
        "mudguards and quilted paneling. At the heel, an embroidered '23' and rubber Jumpman insignia stay" +
        "true to the model's original detailing. From there, a muted black sole and matching lace hooks complete"+
        "the design.",
        rating:5,
        numReviews: 12 
    },
    {
        name:"Nike Dunk Low",
        modelName:"Championship Goldenrod (2021)",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Dunk-Low-Goldenrod/Images/Nike-Dunk-Low-Goldenrod/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1637179859&h=384&q=60",
        price:119,
        countInStock:15,
        category:["Sneaker"],
        sytleID:"DD1391-004",
        colorway:"BLACK/GOLDENROD/WHITE",
        releaseDate:"12/16/2021",
        retailPrice:100,
        description:"Nodding to the origins of the Nike Dunk, the Nike Dunk Low Goldenrod revives one of the first Dunk Low"+
        "colorways that first debuted in 1985 as part of the Be True To Your School collection." +
        "Also known as the Dunk Low Iowa, the Nike Dunk Low Goldenrod features a black leather upper with"+
        "golden yellow overlays and Swooshes. Classic Nike branding on the tongue label and heel tab deliver a"+
        "retro feel. At the base, a white and yellow Air sole completes the design.",
        rating:5,
        numReviews: 20  
    },
    {
        name:"Nike Air Trainer 1 SP",
        modelName:"Travis Scott Wheat",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Air-Trainer-1-SP-Travis-Scott-Wheat/Images/Nike-Air-Trainer-1-SP-Travis-Scott-Wheat/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1655713945&h=384&q=60",
        price:162,
        countInStock:20,
        category:["Sneaker"],
        sytleID:"DR7515-200",
        colorway:"LIGHT CHOCOLATE/RUST PINK",
        releaseDate:"05/27/2022",
        retailPrice:140,
        description:"Drawing inspiration from hiking culture and gear, the Nike Air Trainer 1 SP Travis Scott Grey Wheat arrives"+
        "in a dark brown canvas construction with matching mesh overlays and single stitch Swoosh logos." +
        "Canvas shrouds on the upper give wearers options for styling. At the heel and inside of the tongue,"+
        "concealed zipper pockets provide extra storage. From there, 'Cactus Corporation' insignias at the heel"+
        "and forefoot velcro strap complete the design.",
        rating:4,
        numReviews: 25  
    },
    {
        name:"Nike SB Dunk Low Pro",
        modelName:"Bart Simpson",
        thumbnailUrl:"https://images.stockx.com/360/Nike-SB-Dunk-Low-Pro-Bart-Simpson/Images/Nike-SB-Dunk-Low-Pro-Bart-Simpson/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1650636829&h=384&q=60",
        price:231,
        countInStock:5,
        category:["Sneaker","Popular"],
        sytleID:"BQ6817-602",
        colorway:"HABANERO RED/WHITE-BLUE HERO",
        releaseDate:"05/07/2022",
        retailPrice:110,
        description:"While the Nike SB Dunk Low Bart Simpson is not an official collaboration with The Simpsons, it channels"+
        "color inspiration to the rambunctious character and follows a similar format to the Nike SB Dunk High" +
        "Marge Simpson and the Nike SB Dunk Low Homer Simpson."+
        "The Nike SB Dunk Low Bart Simpson features a yellow leather upper with orange Durabuck overlays and"+
        "a white Swoosh. Hits of blue on the sock liner and outsole add a cool-toned contrast to the shoe's warm"+
        "palette. At the base, a Zoom sole provides comfort and support.",
        rating:5,
        numReviews: 55  
    },
   
    {
        name:"Jordan 12 Retro",
        modelName:"Playoffs (2022)",
        thumbnailUrl:"https://images.stockx.com/360/Air-Jordan-12-Retro-Playoffs-2022/Images/Air-Jordan-12-Retro-Playoffs-2022/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1646230066&h=384&q=60",
        price:181,
        countInStock:55,
        category:["Sneaker"],
        sytleID:"CT8013-006",
        colorway:"BLACK/VARSITY RED-WHITE",
        releaseDate:"03/11/2022",
        retailPrice:210,
        description:"In celebration of its 25th Anniversary, Jordan Brand brought back the shoe that Michael Jordan wore"+
        "while winning his 5th NBA Title, the Air Jordan 12 Retro Playoffs." +
        "Debuted in 1997, the Air Jordan 12 Playoff captures Michael Jordan and the Chicago Bulls' dominance in"+
        "the 1990s era of NBA basketball. This 2022 model sticks to the original design, featuring a black"+
        "tumbled leather upper with a white textural mudguard and red Jumpman embroidery on the tongue. At"+
        "the heel, a woven Jordan label and '23' text add subtle branding. At the base, a white sole with carbon"+
        "fiber detailing completes the design.",
        rating:5,
        numReviews: 35  
    },
    {
        name:"Jordan 9 Retro",
        modelName:"Particle Grey",
        thumbnailUrl:"https://images.stockx.com/images/Air-Jordan-9-Retro-Particle-Grey.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1653373411&q=60",
        price:228,
        countInStock:2,
        category:["Sneaker","Popular"],
        sytleID:"CT8019-060",
        colorway:"BLACK/UNIVERSITY RED/PARTICLE GREY/WHITE",
        releaseDate:"06/21/2022",
        retailPrice:200,
        description:"With color blocking similar to the 2014 Air Jordan 9 Barons, the Air Jordan 9 Particle Grey boasts a black"+
        "nylon upper with quilted panels and light grey Durabuck mudguards. At the heel, a red Jumpman" +
        "basketball emblem brings a sharp contrast to its neutral base. Nodding to the original Air Jordan 9, a"+
        "white outsole with embossed graphics and phrases completes the design.",
        rating:5,
        numReviews: 100  
    },
    {
        name:"Nike Air Force 1 Mid",
        modelName:"Off-White White",
        thumbnailUrl:"https://images.stockx.com/images/Nike-Air-Force-1-Mid-Off-White-White-Product-2.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1655993120&q=60",
        price:214,
        countInStock:10,
        category:["Sneaker"],
        sytleID:"DO6290-100",
        colorway:"WHITE/CLEAR WHITE",
        releaseDate:"06/23/2022",
        retailPrice:185,
        description:"The Nike Air Force 1 Mid Off-White White honors the 40th Anniversary of the Nike Air Force 1 by"+
        "refreshing the classic design with Abloh's signature avante-garde style. It features a white wood grain-" +
        "textured, lightweight mesh construction with ripstop collar straps, and clear TPU Swooshes. At the base"+
        "a warped midsole with multi-colored sections of a track-inspired spiked outsole reference past Nike"+
        "Off-White designs like the Nike Waffle Racer and Air Zoom Tempo Next%.",
        rating:5,
        numReviews: 10  
    },
    {
        name:"Nike Air Max Koko",
        modelName:"White (W)",
        thumbnailUrl:"https://images.stockx.com/images/Nike-Air-Max-Koko-White-W.png?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1617723985&q=60",
        price:67,
        countInStock:5,
        category:["Sneaker"],
        sytleID:"CW9705-100/CI8798-100",
        colorway:"WHITE/METALLIC PLATINUM-PHOTON DUST",
        releaseDate:"04/10/2020",
        retailPrice:100,
        description:""+
        "" +
        ""+
        "",
        rating:2,
        numReviews: 4  
    },
    {
        name:"Nike Vaporwaffle",
        modelName:"sacai Black Gum",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Vaporwaffle-Sacai-Black-Gum/Images/Nike-Vaporwaffle-Sacai-Black-Gum/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1637269956&h=384&q=60",
        price:338,
        countInStock:2,
        category:["Sneaker"],
        sytleID:"DD1875-001",
        colorway:"BLACK/OFF-NOIR/OFF-NOIR",
        releaseDate:"03/10/2022",
        retailPrice:180,
        description:"The Nike Vaporwaffle sacai Black Gum features a black nylon upper with matching monochromatic"+
        "suede overlays and tumbled leather Swooshes. Doubled tongues and Swooshes continue sacai's" +
        "aesthetic of reconstruction and abstraction. At the base, a stacked foam midsole atop a gum outsole"+
        "adds the finishing touch.",
        rating:5,
        numReviews: 200  
    },
    {
        name:"Puma LaMelo Ball MB.01",
        modelName:"Queen City",
        thumbnailUrl:"https://images.stockx.com/360/Puma-MB01-LaMelo-Ball-Purple-Glimmer/Images/Puma-MB01-LaMelo-Ball-Purple-Glimmer/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1648479650&h=384&q=60",
        price:216,
        countInStock:5,
        category:["Sneaker"],
        sytleID:"377237-10",
        colorway:"PURPLE GLIMMER/BLUE ATOLL",
        releaseDate:"03/13/2022",
        retailPrice:125,
        description:"The Puma MB.01 LaMelo Ball Purple Glimmer tributes the Charlotte Hornets with a monochromatic"+
        "Purple Glimmer woven upper. Hits of light blue on the Puma toe logo and tongue complement the" +
        "design's rich palette. At the base, a grooved outsole is geared for explosive styles for play.",
        rating:5,
        numReviews: 20
    },
    {
        name:"adidas Samba",
        modelName:"Wales Bonner Cream Green",
        thumbnailUrl:"https://images.stockx.com/images/adidas-Samba-Wales-Bonner-White-Green.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1654768574&q=60",
        price:189,
        countInStock:10,
        category:["Sneaker"],
        sytleID:"GY4344",
        colorway:"CREAM/GREEN/GUM",
        releaseDate:"06/23/2022",
        retailPrice:160,
        description:""+
        "" +
        ""+
        "",
        rating:5,
        numReviews: 5  
    },
    {
        name:"Nike Air VaporMax 2021 FK",
        modelName:"Black Anthracite",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Air-VaporMax-2021-FK-Black-Anthracite/Images/Nike-Air-VaporMax-2021-FK-Black-Anthracite/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1634913715&h=384&q=60",
        price:132,
        countInStock:100,
        category:["Sneaker"],
        sytleID:"DH4084-001",
        colorway:"BLACK/BLACK-ANTHRACITE-BLACK",
        releaseDate:"06/01/2022",
        retailPrice:200,
        description:""+
        "" +
        ""+
        "",
        rating:3,
        numReviews: 10  
    },
    
    {
        name:"Nike Dunk Low SE",
        modelName:"Easter Candy (W)",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Dunk-Low-SE-Easter-W/Images/Nike-Dunk-Low-SE-Easter-W/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1635195950&h=384&q=60",
        price:260,
        countInStock:2,
        category:["Sneaker"],
        sytleID:"DD1872-100",
        colorway:"WHITE/GREEN GLOW-SUNSET PULSE",
        releaseDate:"06/25/2021",
        retailPrice:110,
        description:"The women's Nike Dunk Low SE Easter Candy (W) features a white leather upper with asymmetrical"+
        "multi-colored overlays. A white and light yellow sole with multicolor speckle details completes the" +
        "design. The women's Nike Dunk Low SE Easter Candy (W) released in June of 2021 and retailed for $110.",
        rating:4.8,
        numReviews: 25  
    },
    {
        name:"Nike Kyrie Low 5",
        modelName:"Community",
        thumbnailUrl:"https://images.stockx.com/images/Nike-Kyrie-Low-5-Community.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1653467068&q=60",
        price:229,
        countInStock:50,
        category:["Sneaker"],
        sytleID:"DV2530-900 / DV2531-900",
        colorway:"BLUE/PINK/CREAM",
        releaseDate:"",
        retailPrice:130,
        description:""+
        "" +
        ""+
        "",
        rating:2.5,
        numReviews: 12  
    },
    {
        name:"Puma LaMelo Ball MB.01",
        modelName:"Rick and Morty",
        thumbnailUrl:"https://images.stockx.com/360/Puma-MB01-LaMelo-Ball-Rick-and-Morty/Images/Puma-MB01-LaMelo-Ball-Rick-and-Morty/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1645636389&h=384&q=60",
        price:294,
        countInStock:10,
        category:["Sneaker"],
        sytleID:"376682-01",
        colorway:"RED/GREEN",
        releaseDate:"02/18/2022",
        retailPrice:135,
        description:"The Puma MB.01 received its first collaboration courtesy of LaMelo Ball's favorite Adult Swim cartoon,"+
        "Rick and Morty." +
        "Sporting a mismatched neon two-tone look, the Puma MB.01 Rick and Morty draws inspiration from"+
        "otherworldly adventures of Rick and Morty. The left shoe features a slime green palette, while the right"+
        "shoe is smothered in the neon red tones. On the back of the tongues, illustrations of both Rick and"+
        "Morty contribute a customized feel.",
        rating:4.9,
        numReviews: 55  
    },
    {
        name:"Nike Air Max 1 SP",
        modelName:"Concepts Far Out (Special Box)",
        thumbnailUrl:"https://images.stockx.com/images/Nike-Air-Max-1-SP-Concepts-Denim-Paisley-2.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1648499958&q=60",
        price:254,
        countInStock:10,
        category:["Sneaker","Popular"],
        sytleID:"DN1803-500",
        colorway:"WILD VIOLET/MULTI-COLOR-SAIL",
        releaseDate:"03/26/2022",
        retailPrice:230,
        description:"PLEASE NOTE: Print Patterns May Vary. Box color may vary between in-store and online release."+
        "" +
        ""+
        "",
        rating: 5,
        numReviews: 255  
    },
    {
        name:"Nike Air Zoom Tempo Next% Flyknit",
        modelName:"White Hyper Violet Flash Crimson",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Air-Zoom-Tempo-Next-White-Hyper-Violet-Flash-Crimson/Images/Nike-Air-Zoom-Tempo-Next-White-Hyper-Violet-Flash-Crimson/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1634932106&h=384&q=60",
        price:143,
        countInStock:10,
        category:["Sneaker"],
        sytleID:"CI9923-100",
        colorway:"WHITE/HYPER VIOLET-FLASH CRIMSON-BLACK",
        releaseDate:"10/01/2020",
        retailPrice:200,
        description:""+
        "" +
        ""+
        "",
        rating:4.5,
        numReviews: 22  
    },
    {
        name:"Nike Air Force 1 Low '07 QS",
        modelName:"Uno",
        thumbnailUrl:"https://images.stockx.com/360/Air-Force-1-Low-07-QS-Uno/Images/Air-Force-1-Low-07-QS-Uno/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1654530214&h=384&q=60",
        price:106,
        countInStock:10,
        category:["Sneaker"],
        sytleID:"DC8887-100",
        colorway:"WHITE/YELLOW ZEST-UNIVERSITY RED",
        releaseDate:"02/01/2022",
        retailPrice:120,
        description:""+
        "" +
        ""+
        "",
        rating:5,
        numReviews: 50  
    },
    {
        name:"Jordan 36",
        modelName:"Year of the Tiger Rainbow",
        thumbnailUrl:"https://images.stockx.com/images/Air-Jordan-36-Year-of-the-Tiger-Rainbow.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1655188440&q=60",
        price:192,
        countInStock:25,
        category:["Sneaker"],
        sytleID:"DN4200-064",
        colorway:"MULTI/MULTI/MULTI",
        releaseDate:"",
        retailPrice:180,
        description:""+
        "" +
        ""+
        "",
        rating:3,
        numReviews: 10   
    },
    {
        name:"Nike Air Max Pre-Day",
        modelName:"Chlorophyll",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Air-Max-Pre-Day-Chlorophyll/Images/Nike-Air-Max-Pre-Day-Chlorophyll/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1635726069&h=384&q=60",
        price:82,
        countInStock:10,
        category:["Sneaker"],
        sytleID:"DC5330-300",
        colorway:"CHLOROPHYLL/CAMELLIA-TREELINE-PHANTOM",
        releaseDate:"08/18/2021",
        retailPrice:150,
        description:""+
        "" +
        ""+
        "",
        rating:4.2,
        numReviews: 15   
    },
    {
        name:"Nike Dunk High",
        modelName:"Undercover Chaos Black",
        thumbnailUrl:"https://images.stockx.com/360/Nike-Dunk-High-Undercover-Chaos-Black/Images/Nike-Dunk-High-Undercover-Chaos-Black/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=2&updated_at=1646939492&h=384&q=60",
        price:84,
        countInStock:20,
        category:["Sneaker"],
        sytleID:"DQ4121-001",
        colorway:"BLACK/BLACK-WHITE",
        releaseDate:"02/28/2022",
        retailPrice:150,
        description:"In a black monochromatic look, the Nike Dunk High Undercover Black embraces the signature 1985"+
        "Dunk silhouette with elongated collars and tongues. Smooth and tumbled leather construction offer a" +
        "variety in touch, but maintain the design's low key appearance. At the heel, contrast printing of 'CHAOS'"+
        "and 'GLEICHGEWICHT' ('BALANCE' in German) symbolize Undercover's motif of embracing the space"+
        "between two polarizing states.",
        rating:5,
        numReviews: 200   
    },
];

export default products;
const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const title = () => {
    return random([
        'TeraFlex TeraFlex ARB Compressor Under Seat Mounting Kit ',
        'Air Compressors, Air Tanks & Air Accessories',
        'VIAIR VIAIR Metal Remote Inlet Air Filter Assembly ',
        'VIAIR VIAIR Dual Stage Air Filter Elements ',
        'VIAIR VIAIR Direct Inlet Air Filter Assembly '
    ]);
};
const user = () => {
    return random([
        'Leanne Graham',
        'Kurtis Weissnat',
        'Kamren',
        'Karianne',
        'Antonette'
    ]);
};

const part_number = () => {
    return random([
        'TER1184120', 
        'V/A92621',
        'V/A92631', 
        'V/A92627',
        'V/A92627'
        ]);
};

const description = () => {
    return random([
        'The TeraFlex JK ARB compressor under seat mounting kit is a simple solution to mount the ARB on-board hi performance twin air compressor under the JK Unlimited front passenger seat and provides maximum protection from damage and from the elements. This ki',
        'Remote Intake Air Filter Assembly, Plastic Housing',
        'Replacement remote-mount air filter assembly with 1/4',
        'Dual Stage Air Filter Elements',
        'Replacement direct-mount air filter assembly with 3/8',
        'Remote Intake Air Filter Assembly, Plastic Housing',
        'Replacement direct-mount air filter assembly with 1/2 /NPT (metal housing).',
        'Air filter elements should be replaced periodically depending on frequency of use and operating environment. For use with plastic air filter housings.',
        'Replacement direct-mount air filter assembly with 1/4',
        'Place your air source just about anywhere you want it with this relocation kit from VIAIR'
    ]);
};

const image = () => {
    return random([
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//05/f9/5a/89/05f95a89fddc5411bb8d0a7dbc461fd8293111ba.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//9f/31/60/c5/9f3160c504d8860c9d46328c0d89ac03cc25a21e.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//38/38/69/04/383869040fa79b8b4933279f2d6703c560302ee2.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//41/fc/d9/70/41fcd970e013301530d63275f11953b45650dd2e.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//b4/78/47/39/b4784739c92dd7044987958037f47e6eba419649.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//d9/1e/55/db/d91e55dbb3b006c14a2aac3609e2bab78a081021.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//78/16/77/b7/781677b73eaffdc105e8a25f8722d0def3712177.jpg',
        'http://n3.datasn.io/data/api/v1/n3a2/auto_part_2/main/part_image//2f/65/b2/1d/2f65b21ddd185947cc40f4c2d2f90ebdeb7564d9.jpg'
    ]);
};

const price = () => {
    return (Math.random() * 100).toFixed(2);
};
const quantity = () => {
    return Math.floor(Math.random() * 10);
};

const randomDate = () =>{
    return random([
        '2020/10/11',
        '2019/11/13'
    ])
}
  
  



function generate(count) {
    const data = [];
    for(let i = 0; i < count; i++) {
        const currentTitle = title();
        const currentUser = user();
        const currentPartNumber = part_number();
        const currentDescription = description();
        const currentImage = image();
        const currentQuantity = quantity();
        const currentPrice = price();
        const currentIssueDate = randomDate()

        data.push({
            title: currentTitle,
            user: currentUser,
            part_number: currentPartNumber,
            description: currentDescription,
            image: currentImage,
            quantity:currentQuantity,
            price: currentPrice,
            dates: currentIssueDate,
         
        });
    }
    return data;
}

export default generate;

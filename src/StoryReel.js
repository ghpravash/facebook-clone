import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://tesla-cdn.thron.com/delivery/public/image/tesla/2ddb3f38-d056-43cc-8e35-c849e7817ded/bvlatuR/std/2880x1800/MX-Interior-Hero-Desktop"
                profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                title="Elon Musk"
            />
            <Story 
                image="https://images.cnbctv18.com/wp-content/uploads/2021/06/trending-stocks-1019x573.jpg"
                profileSrc="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1163170868_471635_c850bx.jpg"
                title="Warren Buffet"
            />
            <Story 
                image="https://www.globalcosmeticsnews.com/wp-content/uploads/2019/11/s3-amazon-profit-and-tax-2018-2x1-810.jpg"
                profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D509%26cropX2%3D1763%26cropY1%3D185%26cropY2%3D1440"
                title="Jeff Bezos"
            />
            <Story 
                image="https://static.straitstimes.com.sg/s3fs-public/articles/2020/03/16/ab_lvmh_160320.jpg"
                profileSrc="https://thumbor.forbes.com/thumbor/3474x1867/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5db9aaa7b4d5050006787ad2%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D3474%26cropY1%3D0%26cropY2%3D1867"
                title="Bernard Arnault"
            />
            <Story 
                image="https://c.s-microsoft.com/en-us/CMSImages/MicrosoftTeams-image.png?version=75f636f2-6c15-b1ec-06e6-3776c7b5c3a0"
                profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
                title="Bill Gates"
            />

            
        </div>
    )
}

export default StoryReel

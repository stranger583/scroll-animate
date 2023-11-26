document.addEventListener("scroll", function () {

    const container = document.querySelector('.container');
    const explodedImage = document.querySelector('.exploded-image');

    // 取得 container 和 exploded-image 的位置
    const containerRect = container.getBoundingClientRect();
    const explodedImageRect = explodedImage.getBoundingClientRect();

    // 計算 exploded-image 頂點距離 container 頂點的相對距離
    const topDistance = explodedImageRect.top - containerRect.top;

    // 計算百分比
    const topPercentage = (topDistance / containerRect.height);

    //計算視窗物件比例, 12 為動畫距離比例
    const windowPercentage = 12 / 1920 * 100

    const imgTagArray = document.getElementsByTagName("img")

    for (let index = 0; index < imgTagArray.length; index++) {
        const translateCounter = index * windowPercentage * topPercentage
        imgTagArray[index].style.transform = `translate3d(${-translateCounter}vw,${translateCounter}vw,0px)`
    }

})





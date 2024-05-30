import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const ImgScroll = () => {
  return (
    <>

      <div>

        <h1 className='text-4xl m-2 font-bold text-center capitalize p-auto'>
          <TypewriterComponent

            options={{
              strings: ['Glimpse Of Mahakaal Yogpeeth'],
              autoStart: true,
              loop: true,
              delay: 36,
              changeDelay: 12,

            }}
          />
        </h1>
      </div>
      <div class="wrapper">
        <div class="itemLeft item1">
          <img src="https://i.ibb.co/sjBSR96/gallery1.jpg" alt="" />
        </div>
        <div class="itemLeft item2">
          <img src="https://i.ibb.co/wMjVbjz/gallery2.jpg" alt="" />
        </div>
        <div class="itemLeft item3">
          <img src="https://i.ibb.co/D7dRr8T/gallery3.jpg" alt="" />
        </div>
        <div class="itemLeft item4">
          <img src="https://i.ibb.co/0XPFFZG/gallery4.jpg" alt="" />
        </div>
        <div class="itemLeft item5">
          <img src="https://i.ibb.co/25dfSK7/gallery5.jpg" alt="" />
        </div>
        <div class="itemLeft item6">
          <img src="https://i.ibb.co/7Rkf9T3/gallery6.jpg" alt="" />
        </div>
        <div class="itemLeft item7">
          <img src="https://i.ibb.co/xXP0rKM/gallery7.jpg" alt="" />
        </div>
        <div class="itemLeft item8">
          <img src="https://i.ibb.co/VvGSnQW/gallery8.jpg" alt="" />
        </div>
      </div>
      <div class="wrapper">
        <div class="itemRight item1">
        <img src="https://i.ibb.co/sjBSR96/gallery1.jpg" alt="" />
        </div>
        <div class="itemRight item2">
        <img src="https://i.ibb.co/wMjVbjz/gallery2.jpg" alt="" />
        </div>
        <div class="itemRight item3">
        <img src="https://i.ibb.co/D7dRr8T/gallery3.jpg" alt="" />
        </div>
        <div class="itemRight item4">
        <img src="https://i.ibb.co/0XPFFZG/gallery4.jpg" alt="" />
        </div>
        <div class="itemRight item5">
        <img src="https://i.ibb.co/25dfSK7/gallery5.jpg" alt="" />
        </div>
        <div class="itemRight item6">
        <img src="https://i.ibb.co/7Rkf9T3/gallery6.jpg" alt="" />
        </div>
        <div class="itemRight item7">
        <img src="https://i.ibb.co/xXP0rKM/gallery7.jpg" alt="" />
        </div>
        <div class="itemRight item8">
        <img src="https://i.ibb.co/VvGSnQW/gallery8.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default ImgScroll

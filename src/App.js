import React, { useState } from 'react'
import './App.css'

import { angela, anna, jacob, kimberly, mark, nathan, rizky, chess } from './images'

const App = () => {
  const [isRead, setIsRead] = useState(false)

  return (
    <div>
      <div className="relative bg-white mt-4 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto max-w-2xl sm:rounded-lg sm:px-10">

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-very_dark_blue">Notifications&nbsp;
            <span className="rounded-md px-2 ml-2 text-white bg-myBlue">{isRead ? '0' : '3'}</span>
          </div>
          <button type='button' onClick={() => setIsRead(true)} className="text-grayish_blue hover:text-myBlue hover:font-semibold hover:cursor-pointer">Mark all as read</button>
        </div>

        <div className="mt-5 flex flex-col space-y-3">
          <div className={`flex items-center rounded-lg ${!isRead && 'bg-very_light_grayish_blue border border-light_grayish_blue_1'} p-3`}>
            <img className="h-12 w-12" src={mark} alt="" />
            <div className="ml-4 text-grayish_blue">
              <div className='flex'>

                <div>
                  <span className="font-bold text-very_dark_blue  hover:text-myBlue hover:cursor-pointer">Mark Webber</span>&nbsp;
                  <span>reacted to your recent post</span>
                  <span className="font-semibold text-dark_grayish_blue hover:text-myBlue hover:cursor-pointer">&nbsp;first tournament today!</span>
                </div>

                {!isRead && (
                  <span className="flex relative h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </div>
              <span className="text-sm">1m ago</span>
            </div>
          </div>

          <div className={`flex items-center rounded-lg ${!isRead && 'bg-very_light_grayish_blue border border-light_grayish_blue_1'} p-3`}>
            <img className="h-12 w-12" src={angela} alt="" />
            <div className="ml-4 text-grayish_blue">
              <div className='flex'>
                <div>
                  <span className="font-bold text-very_dark_blue  hover:text-myBlue hover:cursor-pointer">Angela Gray</span>
                  <span> followed you</span>
                </div>

                {!isRead && (
                  <span className="flex relative h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </div>
              <span className="text-sm">5m ago</span>
            </div>
          </div>

          <div className={`flex items-center rounded-lg ${!isRead && 'bg-very_light_grayish_blue border border-light_grayish_blue_1'} p-3`}>
            <img className="h-12 w-12" src={jacob} alt="" />
            <div className="ml-4 text-grayish_blue">
              <div className='flex'>
                <div>
                  <span className="font-bold text-very_dark_blue hover:text-myBlue hover:cursor-pointer">Jacob Thompson</span>
                  <span> has joined your group</span>
                  <span className="font-bold text-myBlue hover:cursor-pointer"> Chess Club</span>
                </div>

                {!isRead && (
                  <span className="flex relative h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                )}
              </div>
              <span className="text-sm">1 day ago</span>
            </div>
          </div>

          <div className="flex p-3">
            <img className="h-12 w-12" src={rizky} alt="" />
            <div className="ml-4 space-y-3 text-grayish_blue">
              <p><span className="font-bold text-very_dark_blue  hover:text-myBlue hover:cursor-pointer">Rizky Hasanuddin
              </span> sent you a private message</p>
              <span className="text-sm">5 days ago</span>
              <p
                className="rounded-md border text-sm p-4 text-very_dark_blue hover:bg-light_grayish_blue_1 hover:cursor-pointer hover:text-grayish_blue">
                Hello, thanks for setting up the Chess
                Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my
                game.</p>
            </div>
          </div>

          <div className="flex items-center rounded-lg p-3">
            <img className="h-12 w-12" src={kimberly} alt="" />
            <div className="flex w-full justify-between">
              <div className="ml-4 text-grayish_blue">
                <p>
                  <span className="font-bold text-very_dark_blue hover:text-myBlue hover:cursor-pointer">Kimberly Smith</span>
                  <span> commented on your picture</span>
                  </p>
                <span className="text-sm">1 week ago</span>
              </div>
              <img className="h-12 w-12" src={chess} alt="" />
            </div>
          </div>

          <div className="flex items-center rounded-lg p-3">
            <img className="h-12 w-12" src={nathan} alt="" />
            <div className="ml-4 text-grayish_blue">
              <p>
                <span className="font-bold text-very_dark_blue hover:text-myBlue hover:cursor-pointer">Nathan Peterson </span>
                reacted to your recent post <span
                  className="font-semibold text-dark_grayish_blue hover:text-myBlue hover:cursor-pointer"> 5 end-game strategies
                  to increase your win rate</span>
              </p>
              <span className="text-sm">2 weeks ago</span>
            </div>
          </div>

          <div className="flex items-center rounded-lg p-3">
            <img className="h-12 w-12" src={anna} alt="" />
            <div className="ml-4 text-grayish_blue">
              <p><span className="font-bold text-very_dark_blue hover:text-myBlue hover:cursor-pointer">Anna Kim</span> left the
                group <span className="font-bold text-myBlue hover:cursor-pointer"> Chess Club</span></p>
              <span className="text-sm">2 weeks ago</span>
            </div>
          </div>

        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href="https://www.linkedin.com/in/robert-otieno-9b2b42174/" target="_blank" rel='noreferrer'>Robert Otieno</a>.
      </div>
    </div>
  )
}

export default App
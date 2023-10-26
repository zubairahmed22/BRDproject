import React from 'react'

const Disclaimer = () => {
  return (
    <div className='md:flex  ml-6 mr-6   flex-col h-auto md:mr-20 md:ml-20 mt-20 bg-smartstaking-500
     rounded-md  pb-10 border-x-2 border-red-400' >
        <div className='flex flex-col'>
            <div className='flex  justify-center mt-10'>
            <h1 className='text-3xl font-extrabold text-white
            '>Disclaimer</h1>
            </div>
            <div className='font-bold md:flex md:justify-start md:ml-10 mt-4'>
            <h1 className='font-bold text-white text-center'>High Risk Investment</h1>
        </div>
        </div>
        <div className='flex justify-center ml-10 mr-10 mt-6'> 
        <p className='text-gray-400 text-justify'>
            Trading cryptocurrencies carries a high level of risk and may not be suitable for all investors.
Before deciding to trade cryptocurrency, you should carefully consider your investment
objectives, level of experience, and risk appetite. The possibility exists that you could sustain a
loss of some or all your initial investment and therefore you should not invest money that you
cannot afford to lose. You should be aware of all the risks associated with cryptocurrency trading
and seek advice from an independent financial advisor. ICO's, IEO's, STO's and any other form
of offering will not guarantee a return on your investment. <br/>
Any opinions, news, research, analyses, prices, or other information contained on this website is
provided as general market commentary and does not constitute investment advice. Smart
Staking will not accept liability for any loss or damage, including without limitation to, any loss
of profit, which may arise directly or indirectly from use of or reliance on such information. All
opinions expressed on this site are owned by the respective writer and should never be
considered as advice in any form.<br/>
Smart Staking makes no representation or warranties as to the accuracy and or timelines of the
information contained herein. We encourage everyone to do their own research and consult
with financial professionals before making any investment decisions.
            </p>
        </div>
        
    </div>
  )
}

export default Disclaimer
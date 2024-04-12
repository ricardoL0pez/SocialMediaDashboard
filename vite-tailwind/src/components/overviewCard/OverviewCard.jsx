import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import youtube from '../../assets/images/icon-youtube.svg';
import up from '../../assets/images/icon-up.svg';
import down from '../../assets/images/icon-down.svg';


const netWorkLogos = {
    Facebook: facebook,
    Twitter: twitter,
    Instagram: instagram,
    YouTube: youtube,
}

const netWorkColors = {
    Facebook: 'bg-Facebook',
    Twitter: 'bg-Twitter',
    Instagram: 'bg-gradient-to-r from-IG1 to-IG2',
    YouTube: 'bg-YouTube',
}

export const OverviewCard = ({ network, user, audience, audienceType, today, isUp }) => {
    return (
        <article className=" bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center hover:brightness-95 cursor-pointer hover:dark:brightness-135">
            <div className={`${netWorkColors[network]} h-[4px] mb-8`}></div>{/* condicional */}
            <div className='flex items-center place-content-center gap-2'>
                <img src={netWorkLogos[network]} alt={`logo ${network}`} />{/* condicional: segun el network */}
                <p className='text-xs text-Dark-Grayish-Blue font-bold '>{user}</p>
            </div>

            <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
            <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
            <div className='flex items-center place-content-center'>
            <img src={isUp ? up : down} alt="icon arrow" />
            <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green':'text-Bright-Red tracking-widest'}`}>{today} Today</p>
            </div>
        </article>
    )
}


export const OverviewTodayCard = ({ network, statsType, stats, porcentage, isUp }) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] pr-[31px] pb-[19px] pl-6 cursor-pointer hover:brightness-95 dark:bg-Dark-Desaturated-Blue hover:dark:brightness-125 md:w-[255px]'>
      <div className='flex items-center justify-between mb-[21px]'>
        <p className='text-Dark-Grayish-Blue '>{statsType}</p>
        <img src={netWorkLogos[network]} alt={`logo ${network}`} />
      </div>
      <div className='flex place-content-between'>
        <p className='text-[40px] font-bold text-Very-Dark-Blue dark:text-White'>{stats}</p>
        <div className='flex items-center gap-1'>
          <img src={isUp ? up : down} alt="icon" />
          <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage}%</p>
        </div>
      </div>
    </article>
  )
}


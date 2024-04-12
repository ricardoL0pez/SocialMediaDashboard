import data from '../../../data/data.json';
import { OverviewCard, OverviewTodayCard } from '../overviewCard/OverviewCard';

/* console.log(data.overview); */
const convertNumberTok = (number) => {
  if (number >= 10000) {
    number = number / 1000
    return `${number}k`
  }
  return number
}

export const OverviewContainer = () => {

  return (
    
    <section className=' max-w-[1440px] flex flex-wrap gap-[20px] place-content-center  left-0 right-0 mx-auto'>
      {data.overview.map(object => (
        <OverviewCard
          key={object.id}
          network={object.network}
          user={object.user}
          audience={convertNumberTok(object.audience)}
          audienceType={object.audienceType}
          today={object.today}
          isUp={object.isUp}
        />
      ))}
    </section>
  )
}

/* console.log(data['overview-today']); */

export const OverviewTodayContainer = () => {
  return (
    <section>
    <h2 className="mt-10 text-2xl font-bold mb-[27px] text-Dark-Grayish-Blue ml-8 dark:text-White">Overview - Today</h2>
    <div className="flex flex-wrap"> 
      {data['overview-today'].map(object => (
        <div key={object.id} className="lg:w-1/4 p-2  flex gap-10">
        <OverviewTodayCard
          network={object.network}
          statsType={object.statsType}
          stats={convertNumberTok(object.stats)}
          porcentage={object.porcentage}
          isUp={object.isUp}
        />
      </div>
      ))}
    </div>


    </section>
  )
}



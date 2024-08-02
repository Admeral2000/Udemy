import Image from 'next/image';
import cls from './Steps.module.css';
import stepsPointsRespons from '../../../public/stepsPointsRespons.svg'
import stepPhone from '../../../public/stepPhone.svg';
import stepAnalyse from '../../../public/stepAnalyse.svg';
import stepOffer from '../../../public/stepOffer.svg';
import stepStuff from '../../../public/stepStuff.svg';
import stepStart from '../../../public/stepStart.svg';

export default function Steps() {
    const stepsItem = [
        {
            image: stepPhone,
            alt: 'call',
            stepTitle: 'Сontact',
            stepText: 'Send us your project request or project idea.'
        },
        {
            image: stepAnalyse,
            alt: 'analysis',
            stepTitle: 'Analysis',
            stepText: 'We will contact you to clarify your project requirements.'
        },
        {
            image: stepOffer,
            alt: 'offer',
            stepTitle: 'Offer',
            stepText: 'We will provide you with our free, non-binding application.'
        },
        {
            image: stepStuff,
            alt: 'team',
            stepTitle: 'Team',
            stepText: 'We provide a team for your requirements.'
        },
        {
            image: stepStart,
            alt: 'start',
            stepTitle: 'Start',
            stepText: `You will get to know the team and we'll get started.`
        },
    ]

    return (
        <div className={cls.StepsSection} id='steps' style={{ opacity: '1', transform: 'none' }}>
            <div className='container'>
                <h2 className={cls.title}>How we work!</h2>
            </div>
            <div className={cls.stepsWrapper} style={{ backgroundImage: `url('/stepsPoints.svg')` }}>
                <Image className={cls.line} src={stepsPointsRespons} alt='line' width={792} height={2} />
                {stepsItem.map((item) => (
                    <div key={item} className={cls.stepsStep} style={{ opacity: 1, transform: 'none' }}>
                        <Image src={item.image} alt={item.alt} />
                        <div className={cls.wrapStep}>
                            <h3>{item.stepTitle}</h3>
                            <span>{item.stepText}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
import Image from "next/image";
import cls from './Team.module.css';
import Conversation from '@/../public/conversation.svg';
import Counter from '@/components/StaticCounter/Counter';


export default function Team() {

    return (
        <div className={cls.ourTeam} id='team'>
            <div className="container">
                <h2 className="title">Team</h2>
                <div className={cls.teamWrapper}>
                    <div className={cls.teamInner}>
                        <p className={cls.teamText}>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
                        <div className={cls.teamInfoWrapper}>
                            <Counter />
                            <p className={cls.teamTitle}>Dedicated team</p>
                        </div>
                    </div>
                    <div className={cls.teamInner}>
                        <Image className={cls.teamImg} src={Conversation} alt='Team image' />
                    </div>
                </div>
            </div>
        </div>
    )
}
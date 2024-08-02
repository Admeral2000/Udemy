import Image from "next/image";
import Link from "next/link";
import cls from "./Footer.module.css";
import UdevsLogo from "../../../public/logo.svg";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {
    return (
        <div className={cls.footer}>
            <div className="container">
                <Image className={cls.udevsLogo} src={UdevsLogo} alt="Udevs" />
                <div className={cls.navigation}>
                    <div>
                        <h3>About us</h3>
                        <Link href={'#directs'}>Direction</Link>
                        <Link href={'#team'}>Command</Link>
                        <Link href={'#tools'}>Tools</Link>
                        <Link href={'#clients'}>Clients</Link>
                    </div>


                    <div>
                        <h3>Services</h3>
                        <Link href={'#mobile'}>Development of mobile applications</Link>
                        <Link href={'#erp'}>Development and implementation ERP systems</Link>
                        <Link href={'#design'}>User interface, User experience design</Link>
                        <Link href={'#consulting'}>IT consulting</Link>
                        <Link href={'#optimization'}>Optimization IT consulting infrastructure</Link>
                    </div>

                    <div>
                        <h3>Portfolio</h3>
                        <Link href={'#delever'}>Delever</Link>
                        <Link href={'#smsuz'}>Sms.uz</Link>
                        <Link href={'#goodzone'}>Goodzone</Link>
                        <Link href={'#iman'}>Iman</Link>
                    </div>
                </div>

                <div className={cls.copyright}>
                    <p>{'©️'}    {'2024'} {' Udevs. All rights reserved'}</p>
                    <div className={cls.social}>
                        <Link href='/' className={cls.socialLinks} target='_blank'>
                            <InstagramIcon />
                        </Link>
                        <Link href='/' className={cls.socialLinks} target='_blank'>
                            <TwitterIcon />
                        </Link>
                        <Link href='/' className={cls.socialLinks} target='_blank'>
                            <YouTubeIcon />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
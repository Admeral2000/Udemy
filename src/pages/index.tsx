import * as React from 'react';
import { useEffect } from "react";
import Header from '@/components/layouts/Header/Header';
import Hero from '@/components/Hero/hero';
import Services from '@/components/Services/Services';
import Team from '@/components/Team/Team';
import MobileApp from '@/components/MobileApp/MobileApp';
import ERPsystems from '@/components/ErpSystems/ERP';
import Design from '@/components/UIDesign/Design';
import Optimization from '@/components/Optimization/Optimization';
import Consulting from '@/components/Consulting/Consulting';
import Tools from '@/components/Tools/Tools';
import Clients from '@/components/Clients/Clients';
import Delever from '@/components/Delever/Delever';
import SmsUz from '@/components/SmsUz/Sms';
import Goodzone from '@/components/Goodzone/Goodzone';
import Iman from '@/components/Iman/Iman';
import Steps from '@/components/Steps/Steps';
import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  useEffect(() => {
    document.title = "IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры";
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
      <MobileApp />
      <ERPsystems />
      <Design />
      <Optimization />
      <Consulting />
      <Tools />
      <Clients />
      <Delever />
      <SmsUz />
      <Goodzone />
      <Iman />
      <Steps />
      <Contacts />
      <Footer />
    </>
  );
}


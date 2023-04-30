import Image from 'next/image'
import { Inter } from 'next/font/google'

import HeroSection from './components/HeroSection'
import Services from './components/Services'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const items = [
    { id: 1, name: 'HRM',des: "The Human Resource Management (HRM) system is an essential tool for organizations to manage their workforce efficiently. The HRM system is a software application that helps organizations manage employee data, payroll, benefits, and other HR-related tasks.",img:"https://www.elearnever.se/apps/wp-content/uploads/2021/07/1-14-730x410-1.jpg",mylink: "../hrm", },
    { id: 2, name: 'Legal Consultanc',des: "Legal Consultancy is a service provided by legal professionals to individuals, businesses, and organizations seeking legal advice and guidance. Legal consultancy involves providing expert advice on various legal matters, including but not limited to, corporate law, labor law, commercial law, intellectual property law, and litigation",img:"https://glservices.pk/wp-content/uploads/2020/11/legal_consultancy.jpg", mylink: "../legalcon" },
    { id: 3, name: 'Law Consultancy',des: "Law consultancy is a service provided by legal experts to individuals, businesses, and organizations seeking legal advice and guidance.",img:"https://www.lawyer-monthly.com/Lawyer-Monthly/wp-content/uploads/2018/12/iStock-1079268358.jpg", mylink: "../lawcon" },
  ];
  return (
    <main >
     <HeroSection/>
     <Services items={items}/>
    </main>
  )
}

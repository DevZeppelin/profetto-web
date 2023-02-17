import React, { Component } from "react";
import Image from 'next/image'
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export class mantenimiento extends Component {

  
  render() {

    
    return (
      <div className={styles.main}>
        
          <div className={styles.card}><h2 className={inter.className}>Página en mantenimiento</h2></div>
          <Image
            src="/profile.png"
            alt="Profile Logo"
            width={300}
            height={300}
            priority
          />
                <Link href="/"><p className={styles.description}>BACK</p></Link>
        
      </div>
    );
  }
}

export default mantenimiento;

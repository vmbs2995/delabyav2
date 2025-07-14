'use client';

import { useState } from 'react';
import Image from 'next/image';
import Background from '../components/Background';





const AuthPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    return (
     <Background>
        <div ></div>
     </Background>

    );
}

export default AuthPage;
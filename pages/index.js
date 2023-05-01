import Head from 'next/head';

import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Google V3</title>
                <meta name='description' content='' />
            </Head>

            {/* Header */}
            <Header />
            {/* Body */}

            {/* Footer */}
        </div>
    );
}

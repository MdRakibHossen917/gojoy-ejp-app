import React, { Suspense } from 'react';
import FeaturedPackage from './FeaturedPackage';
import Banner from './Banner';
 

const Home = () => {
  const featuredPackagePromise = fetch("http://localhost:5000/packages").then(res=>res.json())
   
    return (
      <div>
        <Banner></Banner>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <FeaturedPackage
            featuredPackagePromise={featuredPackagePromise}
          ></FeaturedPackage>
        </Suspense>
      </div>
    );
};

export default Home;
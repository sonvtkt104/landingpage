import SpeedPackage from "./components/SpeedPackage";
import rocket from "./assets/images/rocket.png";
import config from "./assets/images/config.png";
import flower from "./assets/images/flower.png";
import SpeedFlow from "./components/SpeedFlow";
import check from "./assets/images/check.png";
import process from "./assets/images/process.jpg";
import Testimonial from "./components/Testimonial";
import example1 from "./assets/images/example1.png";
import example2 from "./assets/images/example2.png";
import example3 from "./assets/images/example3.png";
import milometer from "./assets/images/milometer.png";
import cashback from "./assets/images/cashback.png";
import question from "./assets/images/question.png";
import banner from "./assets/images/banner-bottom.png";
import tag from "./assets/images/tag.png";
import FAQ from "./components/FAQ";
import diagram from "./assets/images/diagram.png";
import { useState, useEffect } from 'react'
import myPDF from './assets/files/SEO Booster Infographic Speed.pdf';
import {LoadingOutlined} from '@ant-design/icons';

function App() {
  const [people, setPeople] = useState(4306);
  const [loadingSpeedUpNow, setLoadingSpeedUpLoad] = useState(0);
  const [loadingSignUp, setLoadingSignUp] = useState(0);
  const [loadingBottomBanner, setLoadingBottomBanner] = useState(0);

  useEffect(() => {
    const step = 604800000;    //1 week -> milliseconds
    const dateOrigin = new Date("2022-03-23");
    const dateCurrent = new Date();

    const distanceWeek = parseInt((dateCurrent.getTime() - dateOrigin.getTime()) / step);

    setPeople((pre) => pre + 100 * distanceWeek);
  }, [])

  const handleSignUp = () => {
    setLoadingSignUp(1);

    fetch("https://www.google-analytics.com/collect?v=1&t=event&tid=UA-53113273-31&cid=e89af982-d7d8-415c-9bd0-b306d9b1ce53&ec=Speed_It_Up&ea=lp-sign-up-2&ev=1&el={app.shopName}")
    .then (res => {
    })
    .catch(err => {
    })

    window.location = "/speed-plan/sign-up";
  }

  const handleClickSpeedUpNow = () => {
    setLoadingSpeedUpLoad(1);

    fetch("https://www.google-analytics.com/collect?v=1&t=event&tid=UA-53113273-31&cid=e89af982-d7d8-415c-9bd0-b306d9b1ce53&ec=Speed_It_Up&ea=lp-sign-up-1&ev=1&el={app.shopName}")
    .then (res => {
    })
    .catch(err => {
    })

    window.location = "/speed-plan/sign-up";
  }

  const handleClickBottomBanner = () => {
    setLoadingBottomBanner(1);

    fetch("https://www.google-analytics.com/collect?v=1&t=event&tid=UA-53113273-31&cid=e89af982-d7d8-415c-9bd0-b306d9b1ce53&ec=Speed_It_Up&ea=lp-askusanything&ev=1&el={app.shopName}")
    .then (res => {
    })
    .catch(err => {
    })

    window.location = "/speed-plan/sign-up";
  }

  const handleDownload = () => {
    fetch("https://www.google-analytics.com/collect?v=1&t=event&tid=UA-53113273-31&cid=e89af982-d7d8-415c-9bd0-b306d9b1ce53&ec=Speed_It_Up&ea=lp-download&ev=1&el={app.shopName}")
    .then (res => {
    })
    .catch(err => {
    })
  }

  const handleBack = () => {
    fetch("https://www.google-analytics.com/collect?v=1&t=event&tid=UA-53113273-31&cid=e89af982-d7d8-415c-9bd0-b306d9b1ce53&ec=Speed_It_Up&ea=lp-back&ev=1&el={app.shopName}")
    .then (res => {
    })
    .catch(err => {
    })
  }


  return (
    <div className="landing">
      <div className="landing-back">
        <a onClick={handleBack} href="/speed-analysis">&lt; Back</a>
      </div>
      <div className="landing-speed-up-package">
        <h1>SPEED UP PACKAGE</h1>
        <p>Do you know that: <span>A 1-second in page response can result in a 7% reduction in conversions?</span></p>
        <p>With the Speed Up service, you can achieve your desired speed score that contributes to your SEO and customer success.</p>
        <div className="speed-package-container">
          <SpeedPackage image={rocket} title='Up to 50% faster' description='80+ Score in Google Page Speed Insight'/>
          <SpeedPackage image={config} title='No break' description='No break-in functionality and design' />
          <SpeedPackage image={flower} title='Refund for low results' description="Refund is available if there's no major change" />
        </div>
        <div>
          <button onClick={handleClickSpeedUpNow} className={loadingSpeedUpNow === 1 ? 'active' : ""} >
            {
              loadingSpeedUpNow === 1 ? <LoadingOutlined style={{position: 'absolute', left: '30px', fontSize: '22px', top: '7px'}}/> : ""
            }
            SPEED UP NOW &gt;
          </button>
        </div>
      </div>
      <div className="speed-optimization-flow">
        <h2 className="header-h2">speed optimization flow</h2>
        <div className="speed-flow-container">
          <SpeedFlow sequence="1" title="Check Speed score" checkNow={true}/>
          <SpeedFlow sequence="2" title="Get Access & Activate" checkNow={false}/>
          <SpeedFlow sequence="3" title="Enjoy Fast, Interactive Pages" checkNow={false} />
        </div>
      </div>
      <div className="pricing">
        <div className="pricing-image">
          <img src={process} alt="process" />
        </div>
        <div className="pricing-description">
          <div className="pricing-description-detail">
            <h3>WHAT WE DO?</h3>
            <ul>
              <li>
                <img src={check} alt="check" />
                <p>Lazyload and Preloading</p>
              </li>
              <li>
                <img src={check} alt="check" />
                <p>Minify Javascript, CSS codes</p>
              </li>
              <li>
                <img src={check} alt="check" />
                <p>Organize JS code of 3rd party</p>
              </li>
            </ul>
            <p>And more...</p>
            <h3>OUR OFFER</h3>
          </div>
          <div className="pricing-description-offer">
            <h2 style={{position: 'relative'}}>$350 <span style={{position: 'absolute', color: '#838383', fontSize: '22px', textDecoration: 'line-through', fontWeight: 'normal', lineHeight:"47px", marginLeft: '10px'}}></span></h2>
            <p>One-time payment</p>
            <p>Free re-optimization in 365 days</p>
            <button onClick={handleSignUp} className={loadingSignUp === 1 ? 'active btn' : "btn"}>
              {
                loadingSignUp === 1 ? <LoadingOutlined style={{position: 'absolute', left: '50px', fontSize: '22px', top: '10px'}}/> : ""
              }
              SIGN UP &gt;
            </button>
            <img src={tag} alt="tag"/>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h2 className="header-h2">testimonials</h2>
        <p><span>{`${parseInt(people / 1000)},${Number(people) % 1000}`}</span> people have been interested in Speed Up with SEO Booster because it certainly matters!</p>
        <div className="testimonials-container">
          <Testimonial image={example1} link="https://tostoron.com/" before="40" after="95" description='"Thank you very much, dear SEO Booster and Marketing Team for the optimizing of my website."'/>
          <Testimonial image={example2} link="https://www.argentum-uk.com/" before="35" after="95" description='"SEO Booster made really valuable improvements that improved speed significantly. The changes were delivered earlier than originally promised, and done with a minimum of fuss."'/>
          <Testimonial image={example3} link="https://www.retrostyler.com/" before="32" after="98" description='"Great app, and the speed optimisation service is very good. The development team went above and beyond to make sure they made the gains necessary for a well-optimised performance."'/>
        </div>
      </div>
      <div className="FAQ">
        <div className="FAQ-header" style={{display: 'flex', justifyContent: 'center'}}>
          <h2 className="header-h2">FreeQuently asked questions</h2>
          <img src={question} alt="" />
        </div>
        <div className="FAQ-container">
          <FAQ title="How can you measure my speed score?" description="The speed score of your website is calculated by Google PageSpeed Insight. We will work on its recommendations to improve your speed."/>
          <FAQ title="How long wil the optimization take?" description="The process normally lasts about 10 - 14 days. Communication is maintained during this period. If there's any update, we'll notice you as soon as possible via Livechat or email."/>
          <FAQ title="What if my score decreases after the optimization?" description="If you witness a decrease in your speed score within the 365-day period after the first optimization, please notify us and our technical team will help you perform additional optimization to lift it up again for free!"/>
          <div className="FAQ-item">
            <h3>If I am not satisfied, can I get my money back?</h3>
            <p>We are open for a full refund in <span>two following cases:</span></p>
            <p>- Your website is already well-optimized and there's hardly any room left for improvement.</p>
            <p>- We fail to deliver you the promised results in the end.</p>
          </div>
        </div>
        <img className="milometer" src={milometer} alt="" />
        <img className="cashback" src={cashback} alt="" />
        <div>
          <button className="btn">ASK US ANYTHING</button>
        </div>
      </div>
      <div className="find-out-more">
        <h2 className="header-h2">find out more</h2>
        <p>Want more information about Website Speed? We made an infographic for you!</p>
        <img src={diagram} alt="" />
        <div>
          <a onClick={handleDownload} href={myPDF} download>
            <button>DOWNLOAD IT FREE</button>
          </a>
        </div>
      </div>
      <div className="landing-bottom-banner" onClick={handleClickBottomBanner}>
        <div>
          <img src={banner} alt="" />
        </div>
        <div className="responsive-mobile">
          <p><span style={{fontSize: '24px'}}>$350</span> to be worry-free about pagespeed for <span style={{fontWeight: '500'}}>365 days</span>!</p>
          <p style={{textAlign: 'left'}}>Hurry, only <span style={{  fontWeight: 'bold' }}>10</span> slots per week!</p>
        </div>
        <div>
          <button className={loadingBottomBanner === 1 ? "active" : ""} >
              {
                loadingBottomBanner === 1 ? <LoadingOutlined style={{position: 'absolute', left: '20px', fontSize: '22px', top: '7px'}}/> : ""
              }
            I NEED THIS &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

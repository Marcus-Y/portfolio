import './styles/Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

const BASE_URL = import.meta.env.BASEURL;

function Projects() {

  
  return (
    <>
    <div className='ProjectBlock p-4'>
      <h1 className='p-[1rem_0] text-[3.5rem] text-center'>Projects</h1>
      <Swiper
        modules={[Navigation, EffectCoverflow,FreeMode]}
        spaceBetween={10}
        slidesPerView={3}
        loop
        navigation={{clickable:true}}
        freeMode={{sticky:true}}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 2,
          slideShadows: true,
        }}
        effect={'coverflow'}
        centeredSlides
        className=''
      >
        <SwiperSlide>
          <div className='flex justify-center'>
            <a href=''>
            {/* <img src="./images/JobTrackerImg.png" alt='JobTrackerImg' className=""/> */}
            {/* BASE_URL for github pages*/}
            <img src={BASE_URL + "/images/JobTrackerImg.png"} alt='JobTrackerImg' className=""/>
            <div className='slide-content'>
              <h4 className='proj-name'>Personal Job Tracker</h4>
              <p className='h-[6rem] overflow-y-scroll'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.</p>
            </div>
            </a>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <a href=''>
            <img src="./images/TinyBertImg.png" alt='TinyBertImg' className=""/>
            <div className='slide-content'>
              <h4 className='proj-name'>Finetuning TinyBERT-4L model with SQuAD 2.0</h4>
              <p className='h-[6rem] overflow-y-scroll'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.</p>
            </div>
            </a>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <a href=''>
            <img src="./images/NLPImg.png" alt='NLPImg' className=""/>
            <div className='slide-content'>
              <h4 className='proj-name'>Summarization of Political Parties Manifestos using NLP</h4>
              <p className='h-[6rem] overflow-y-scroll'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.</p>
            </div>
            </a>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <a href=''>
            <img src="./images/MultimodalImg.png" alt="MultimodalImg" className=""/>
            <div className='slide-content'>
              <h4 className='proj-name'>Real-Time Interactions with Social Signal Processing Models</h4>
              <p className='h-[6rem] overflow-y-scroll'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus,
                ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet
                dolor lectus eu libero. Vestibulum venenatis eget turpis sed
                faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam
                elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean
                tristique nisl tellus, sit amet fringilla nisl volutpat cursus.
                Quisque dignissim lectus ac nunc consectetur mattis. Proin vel
                hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et
                tincidunt tristique, nisl risus facilisis lectus, ut interdum orci
                nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit
                sodales posuere eget non est. Fusce convallis vestibulum dolor non
                volutpat. Vivamus vestibulum quam ut ultricies pretium.</p>
            </div>
            </a>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <img src="" alt="WIP" className=""/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

// <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108945-snH9n5sN1vrb.png" className=""/>
export default Projects;
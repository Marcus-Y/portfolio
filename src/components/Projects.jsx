import './styles/Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';

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
            <img src="./images/JobTrackerImg.png" alt='JobTrackerImg' className=""/>
            <div className='slide-content'>
              <h4 className='proj-name'>Personal Job Tracker</h4>
              <p className='h-[6rem] overflow-y-scroll'>
                Created with Python inside a Jupyter Environment solely for extracting self curated data from a Google Sheets via Google API.<br></br>
                Cleaning over 100 data spanning multicolumns with <b>Pandas Library</b> as well as visualizing the dataframes with <b>Matplotlib Library</b> filtering Top Demanding Jobs, Greatest Pay, Skill vs Pay Ratio, etc....<br></br>
                Created API backend endpoints with <b>FastAPI</b> for a future full stack project intended for other users to use.
              </p>
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
              <p className='h-[6rem] overflow-y-scroll'>
                This project uses the TinyBERT-4L model and SQuAD 2.0 dataset <b>({">"}100k Q&A data).</b>
                <br></br>
                The purpose is to finetune a smaller model on the dataset to see if the metrics can perform better or near equivalent compared to a larger model.
                <br></br>
                The larger model that is used for comparison is <b>TinyBERT-12L</b> finetuned on the same dataset.
                <br></br>
                TinyBERT-4L achieved an Exact Match of <b>56.5</b> and F1 score of <b>61.2</b>
                <br></br>
                TinyBERT-12L has an Exact Match of <b>57.12</b> and F1 score of <b>60.86</b>
                <br></br>
                With the smaller model performing with better metrics, it can be used over the larger one as it would save storage space.
              </p>
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
              <p className='h-[6rem] overflow-y-scroll'>
                This project aims to extract relevant topics within political parties manifestos to suggest to users for easy reading access. It also summarizes selected topics on their ideologies.
                <br></br>
                This project uses BERTopic in Python to cluster topics within the manifestos with over <b>100 pages</b>.
                <br></br>
                Applying the SpaCy library to automatically transform the text files into tokens for BERTopic.
                <br></br>
                Different hyperparamters were configured to bring the best results for users.
              </p>
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
              <p className='h-[6rem] overflow-y-scroll'>
                This project is built in <b>Python Jupyter</b> and aims to bring multimodals into one system in order to infer an emotion from a user based on their voice and expressions. This inferred emotion will then be passed to a Large Language Model (Ollama) with text in order to generate a response.
                <br></br>
                These modals consists of <b>speech, audio, and text</b>.
                <br></br>
                Transformed unlabeled data of facial expressions into data clusters which analyze similarities and differences of unknown features
                <br></br>
                Worked with and transformed over <b>30k images</b> into labelled data to assess the performance of several models
              </p>
            </div>
            </a>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex justify-center'>
            <a href=''>
            <img src="" alt="WIP" className=""/>
            <div className='slide-content'>
              <h4 className='proj-name'>To be Added</h4>
              <p className='h-[6rem] overflow-y-scroll'>
                To be added
              </p>
            </div>
            </a>            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}

// <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108945-snH9n5sN1vrb.png" className=""/>
export default Projects;
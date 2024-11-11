import React from 'react'
import "./Blog.css"
import blogintro from "../../Assets/images/blogintro.png"
import blogimg1 from "../../Assets/images/blogimg1.png"
import blogimg2 from "../../Assets/images/blogimg2.png"
import genz from "../../Assets/images/genz.png"
import secretlife from "../../Assets/images/secretlife.png"
import mount from "../../Assets/images/mounts.png"
import majorlines from "../../Assets/images/majorlines.png"
import stress from "../../Assets/images/stress.png"
import career from "../../Assets/images/career.png"
import nextdecade from "../../Assets/images/nextdecade.png"
import leverage from "../../Assets/images/leverage.png"
import energyflow from "../../Assets/images/energyflow.png"
import startup from "../../Assets/images/startup.png"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";   


const Blog = () => {
  return (
    <>
     <div className='blog'> 
      <section className='blogintro'>
        <div className='blog-welcomenote'>
          <h1>BLOGS</h1>
          <p>Dr. Sohini Sastri – The Best Astrologer</p>
        </div>
      </section>
      <section className='blog-wholediv'>
        <div className='blog-entry1'>
          <div className='blog-cart'>
            <img src={blogimg1} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How Can Beginners Read Palm Mounts? A Simple Guide to Understanding Your Hands</h1>
              <p>Nov 8, 2024</p>
              <p>Curious about what the mounts on your palm reveal? This beginner’s guide walks you through the basics of reading palm mounts, helping you understand personality traits linked to each mount. From ambition to intuition, explore the fascinating insights your hands hold, as explained by the best astrologer in India. Perfect for anyone starting out in palmistry!</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={blogimg2} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How Can Palmistry Reveal Your Life’s Purpose? Insights from the Best Astrologer in India</h1>
              <p>Oct 24, 2024</p>
              <p>Discover how palmistry can enlighten your life purpose and guide you along your journey. With insights from the best astrologer in India, learn how the ancient art of palmistry reveals hidden truths about your character, relationships, and destiny. Palmistry, also known as chiromancy, involves analyzing the lines, mounts, and shapes of your hands to uncover your strengths, challenges, and life purpose. By examining key elements such as the Heart, Head, and Life lines, along with the roles of mounts and finger shapes, palmistry offers a unique perspective on personal growth and purpose. For those seeking clarity, a skilled palm reader can provide insights that resonate deeply with your life’s path. If you’re ready to explore your own destiny, connect with the best astrologer in India for a truly transformative experience.</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={genz} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How Will Career Astrology in 2024 Shape Opportunities for Millennials and Gen Z? Discover Insights from the Best Astrologer in India</h1>
              <p>Oct 16, 2024</p>
              <p>Explore how the 2024 career horoscope is going to shape opportunities for millennials and Gen Z, take some insight from the best astrologer in India...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={secretlife} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>What is Palmistry & How Can It Unlock the Secrets of Your Life?</h1>
              <p>Oct 1, 2024</p>
              <p>Hello Reader! Welcome to the blog page of Dr. Sohini Sastri, the best astrologer in India. Palmistry, an ancient practice that dates back thousands...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='blog-entry2'>
          <div className='blog-cart'>
            <img src={mount} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>What does the mounts on your palm indicate as per the best astrologer in India?</h1>
              <p>Nov 7, 2024</p>
              <p>Palmistry, or the art of reading palms, has fascinated humanity for centuries. By interpreting the lines, shapes, and features on our hands, we can gain insights into our personality, potential, and even life events. One of the essential aspects of palmistry is understanding the mounts on the palm. As the best astrologer in India, I, Dr. Sohini Sastri, have spent years exploring how these subtle elevations reveal deeper meanings about a person’s character and destiny.</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={majorlines} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>The Meaning of Major Lines in Palmistry as per the Best Astrologer in India</h1>
              <p>Oct 23, 2024</p>
              <p>Hello Reader! Welcome to the blog page of Dr. Sohini Sastri, one of the best astrologer in India. Palmistry, the ancient art of reading hands, has...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={stress} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How Does Palmistry Help with Digital Burnout and Stress? Guide from the Best Astrologer in India.</h1>
              <p>Oct 9, 2024</p>
              <p>Learn to understand through palmistry about dealing with digital burnout and stress. Get the most insightful knowledge from the Best Astrologer in...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={career} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How the Best Astrologer in India Can Help You in Your Career Growth?</h1>
              <p>Sep 24, 2024</p>
              <p>Hello Reader! Welcome to the blog page of Dr. Sohini Sastri, the best astrologer in India. When it comes to career growth, people often focus on...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='blog-entry3'>
          <div className='blog-cart'>
            <img src={nextdecade} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>Astrological Predictions for the Next Decade: What’s in Store for Each Sign?</h1>
              <p>Nov 4, 2024</p>
              <p>Astrology is more than a map; it’s a journey. Over the next decade, each zodiac sign will experience unique celestial influences that can impact...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={leverage} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How Can the Best Astrologer in India Leverage Palmistry to Support You During Major Life Events From Marriage to Retirement?</h1>
              <p>Oct 21, 2024</p>
              <p>Find out how the Best Astrologer in India uses palmistry while catering to someone during one of the many transitions- from marriage to retirement....</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={energyflow} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>How Do Palmistry and Chakras Affect Your Energy Flow? Answer from the Best Astrologer in India</h1>
              <p>Oct 4, 2024</p>
              <p>Of all who searched for understanding and forces guiding their lives, there are few like palmistry and chakra analysis that hold the deepest...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
          <div className='blog-cart'>
            <img src={startup} alt="" className='blogimg1'/>
            <div className='blogcart-content'>
              <h1>Can the Best Astrologer in India Boost Your Startup’s Creative Strategy?</h1>
              <p>Sep 19, 2024</p>
              <p>In the competitive world of startups, creativity and innovation is a wonderful touch that gives you the impetus to create something unique and be at...</p>
              <button className='readmore-btn'>READ MORE</button>
            </div>
          </div>
        </div>
      </section>
      <p className='oldpage'><MdKeyboardDoubleArrowLeft /> Older Entries</p>
        </div> 
    </>
  )
}

export default Blog

import React from 'react';
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-[#21555B] to-[#003C42] text-white p-4 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/fzZmW7rX/Full-Logo.jpg"
              alt="Poshana Logo"
              className="h-10 md:h-12 transition-transform duration-300 hover:scale-110"
            />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#21555B] md:bg-transparent p-4 md:p-0`}
          >
            <a
              href="#home"
              className="block md:inline-block md:ml-6 py-2 md:py-0 text-lg hover:text-[#EFFF15] transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#features"
              className="block md:inline-block md:ml-6 py-2 md:py-0 text-lg hover:text-[#EFFF15] transition duration-300 ease-in-out"
            >
              Features
            </a>
            <a
              href="#about"
              className="block md:inline-block md:ml-6 py-2 md:py-0 text-lg hover:text-[#EFFF15] transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="/terms"
              className="block md:inline-block md:ml-6 py-2 md:py-0 text-lg hover:text-[#EFFF15] transition duration-300 ease-in-out"
            >
              Terms & Conditions
            </a>
            <a
              href="/disclaimer"
              className="block md:inline-block md:ml-6 py-2 md:py-0 text-lg hover:text-[#EFFF15] transition duration-300 ease-in-out"
            >
              Disclaimer
            </a>

            <button className="bg-[#EFFF15] text-black px-6 py-2 rounded-full ml-6 hover:bg-opacity-90 flex items-center transition duration-300 ease-in-out">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-b from-[#64EBE4] to-[#00A2A5] pt-24 pb-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Text Box */}
            <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-lg transition-transform duration-500 hover:scale-105">
              <h2 className="text-3xl font-monospace  font-bold text-[#21555B] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 font-lora mb-4">
                To inspire and empower individuals worldwide to achieve their
                highest potential in health, fitness, and nutrition by creating
                a supportive, science-backed, and personalized platform for
                lifelong well-being.
              </p>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-30 h-[200px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Wellness Lifestyle"
                  className="w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
                />
                <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#EFFF15] text-black px-6 py-2 rounded-full hover:bg-opacity-90 flex items-center shadow-lg">
                  <Download className="w-4 h-4 mr-2" />
                  Get the App Today!
                </button>
              </div>
            </div>

            {/* Right Text Box */}
            <div className="bg-white/90 p-8 rounded-lg shadow-xl backdrop-blur-lg transition-transform duration-500 hover:scale-105">
              <h2 className="text-3xl font-playfair font-bold text-[#21555B] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 font-lora mb-4">
                To provide accessible, data-driven health, fitness, and
                nutrition solutions that help users achieve wellness goals
                through tailored programs, expert guidance, and a supportive,
                community-driven experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="w-full py-16 bg-[#f3f4f6]">
        <div className="container mx-auto text-center mb-8">
          {/* Features Heading and Description */}
          <div className="flex items-center justify-center space-x-4">
            <h2 className="text-6xl font-playfair font-bold bg-gradient-to-r from-[#21555B] to-[#003C42] bg-clip-text text-transparent">
              {' '}
              Features
            </h2>
            <img src="https://i.ibb.co/Nfr4gzL/jj1.png" alt="Poshana Logo" className="h-20 w-20" />
          </div>

          <p className="text-2xl font-manrope font-bold text-transparent bg-gradient-to-r from-[#FF6A00] to-[#FF3E00] bg-clip-text mt-2">
            For your everyday source of inspiration
          </p>
        </div>

        {/* Welcome Text Section with different background and touching grid */}
        <div className="bg-[#F1F5F9] py-4">
          <div className="container mx-auto text-center">
            <p className="text-lg font-medium text-[#21555B] font-roboto">
              Welcome to the Feature Section of Poshana, your ultimate
              destination for all things nutrition and wellness.
            </p>
          </div>
        </div>

        <div className="bg-[#E4A08C] w-full py-12">
          <div className="container mx-auto grid md:grid-cols-3 gap-6 md:gap-8 px-4">
            {/* Feature 1 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/ycZF03QG/Pic01.png"
                  alt="Feature 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Medication & Supplement
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Reminders through notification
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                Eliminates the Burden of Remembering: No more relying on memory
                or handwritten schedules. The app takes care of the reminders,
                freeing up mental space.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/6JgVVc3G/Pic02.png"
                  alt="Feature 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Wakeup Time
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Blissful start
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature goes beyond a simple alarm clock. It personalizes
                the wake-up experience based on the user's work style, daily
                goals, and desired mood.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/tPTFmTRp/Pic03.png"
                  alt="Feature 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Workout
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Balanced Lifestyle
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature tailors daily workout routines to a user's work
                style, ensuring fitness seamlessly integrates with their
                lifestyle for optimal results and reduced stress.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/HTZ29kw9/Pic04.png"
                  alt="Feature 4"
                  className="w-30 h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Breakfast
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Nutritious
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature provides personalized breakfast recommendations
                tailored to the user's age, work style, and health goals.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/wN6k7ymc/Pic05.png"
                  alt="Feature 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Lunch
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Balanced
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature provides personalized lunch recommendations
                tailored to the user's age, work style, and health goals,
                promoting a balanced and fulfilling midday meal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/2mYRLBZ/Pic06.png"
                  alt="Feature 6"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Breakout Time
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Boost Productivity
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature provides personalized evening snack recommendations
                tailored to the user's age, work style, and health goals,
                promoting sustained energy levels, improved focus, and a
                smoother transition to the evening.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/sJ39N3vx/Pic07.png"
                  alt="Feature 7"
                  className="w-30 h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Dinner
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Nourishing
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature provides personalized dinner recommendations
                tailored to the user's age, work style, and health goals,
                promoting a restful night's sleep and an energetic start to the
                next day.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/mr2BH1Rv/Pic08.png"
                  alt="Feature 8"
                  className="w-30 h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Before Bed Time
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Improves Sleep Quality
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature encourages users to establish a relaxing evening
                routine before bedtime, promoting better sleep quality and
                overall well-being.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-[#8AC5DD] rounded-lg p-6 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="w-full h-48 bg-white flex items-center justify-center mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://i.ibb.co/kVtz2Cjt/Pic09.png"
                  alt="Feature 9"
                  className="w-30 h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-montserrat font-bold text-center mb-2 text-black">
                Bed Time
              </h3>
              <h4 className="text-xl text-center text-gray-800 mb-4">
                Care of yourself
              </h4>
              <p className="text-center text-gray-800 font-roboto">
                This feature encourages users to prioritize early bedtimes for
                improved health and well-being, tailored to their age and
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="bg-[#00938C] py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left">
            <img
              src="https://i.ibb.co/jPLGR8Vv/white-logo.png"
              alt="Poshana Logo"
              className="h-16 mb-6 mx-auto md:mx-0"
            />
            <p className="text-xl font-medium text-white mb-6 font-lora">
              <strong>Transform Your Health with Poshana</strong>
            </p>
            <br />
            <p className="text-white text-lg mb-6 font-roboto">
              Poshana is your all-in-one health app designed to help you track
              daily habits, make healthier choices, and prevent
              lifestyle-related diseases with personalized insights.
            </p>
            <ul className="text-white text-lg space-y-4 pl-6">
              <li>
                <strong className="text-[#EFFF15]">
                  Comprehensive Health Tracking:
                </strong>
                <br />
                Monitor your diet, physical activity, sleep, and key health
                metrics for a well-rounded approach to wellness.
              </li>
              <li>
                <strong className="text-[#EFFF15]">Smart Reminders:</strong>
                <br />
                Get timely alerts for meals, medications, and supplements to
                stay consistent with your health goals.
              </li>
              <li>
                <strong className="text-[#EFFF15]">
                  Expert Guidance, Anytime:
                </strong>
                <br />
                Connect with nutritionists for personalized advice and
                actionable steps to improve your health.
              </li>
            </ul>
            <br />
            <p className="text-white text-lg mb-4">
              <strong>Ready to take control of your health?</strong> Download
              Poshana today and start living a more balanced, vibrant life.
            </p>
            <p className="text-[#EFFF15] text-lg font-semibold">
              Redefine self-care with Poshana: Your personal wellness companion
              for a balanced and fulfilling life.
            </p>
          </div>
          <div className="relative">
            {/* Title above the image */}
            <div className="absolute top-[-150px] left-0 w-full text-center z-20">
              <h2 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                <span className="font-serif text-yellow-500">About Us</span>{' '}
                <span className="font-mono text-white"> - Who We Are</span>
              </h2>
            </div>

            {/* Image */}
            <img
              src="https://i.ibb.co/BKPsWyss/Groups.png"
              alt="About Us Character"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00938C] via-transparent to-[#00938C] opacity-20 rounded-lg"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00938C] to-[#006B63] opacity-30"></div>
      </section>

      {/* {contact information} */}
      <section id="contact" className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 font-manrope">
            Contact Us
          </h2>
          <p className="mb-4 font-roboto">
            We value your feedback, questions, and concerns at Poshana. Our
            dedicated team is here to assist you and provide the support you
            need on your nutritional journey. Please don't hesitate to reach out
            to us using any of the following contact methods
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white text-gray-800 p-4 rounded-md shadow">
              <div className="flex justify-center mb-2">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium font-roboto">Email</h3>
              <p>info@poshana.live</p>
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-md shadow">
              <div className="flex justify-center mb-2">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium font-roboto">Phone</h3>

              <p>+91 00000 00000</p>
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-md shadow">
              <div className="flex justify-center mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium font-roboto">Location</h3>
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-[#F0F9F8] text-[#003C42] py-25 relative">
        {/* Adjusted padding for reduced height */}
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 flex flex-col justify-center relative z-10 pl-8 md:pl-16">
              {/* Added padding-left to shift text towards the center */}
              <h2 className="text-5xl font-bold mb-6 font-manrope">
                Are you ready to redefine self-care with Poshana?
              </h2>
              <p className="text-2xl mb-6 font-roboto">
                Your personal wellness companion for a balanced and fulfilling
                life.
              </p>
            </div>
            <div className="pl-8 md:pl-16 pr-8 md:pr-16">
              <button className="bg-[#EFFF15] text-black px-8 py-4 rounded-full hover:bg-opacity-90 font-bold font-manrope">
                {' '}
                JOIN US NOW
              </button>
            </div>
          </div>
        </div>

        {/* Floating Decoration Image - Adjusted for left-aligned positioning */}
        <div className="absolute top-0 left-0 transform translate-x-0 translate-y-0 z-0">
          <img
            src="https://i.ibb.co/wFVmL19R/Abstract-Design.png"
            alt="Decoration"
            className="h-auto w-64 md:w-80"
          />
        </div>
      </section>

      {/* Extra Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-40">
          <img
            src="https://i.ibb.co/xtWKLdJv/labali.png"
            alt="About Us Character"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003C42] text-white py-12">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="https://i.ibb.co/fzZmW7rX/Full-Logo.jpg"
              alt="Poshana Logo"
              className="h-20 w-43 mb-6 rounded-lg border-8 border-white"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 font-inter">
              Contact Info
            </h3>
            <ul className="space-y-4 font-roboto">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                info@poshana.live
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                +91 00000 00000
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                Hyderabad
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 font-inter">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
              >
                <Youtube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 font-inter">Legal</h3>
            <ul className="space-y-4 font-roboto">
              <li>
                <a
                  href="#"
                  className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
                >
                  Delete Account Policy{' '}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#EFFF15] transition duration-300 ease-in-out"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center font-roboto">
          <p>&copy; 2025 Poshana, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

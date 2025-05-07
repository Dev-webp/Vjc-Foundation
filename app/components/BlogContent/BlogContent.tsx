// components/BlogContent.tsx
import React from "react";


interface BlogContentProps {
  slug: string;
}

const titleMap: Record<string, string> = {
  "how-education-changes-lives": "How Education Changes Lives",
  "empowering-women-skill-development": "Empowering Women through Skill Development",
  "sustainability-goals-and-our-role": "Sustainability Goals and Our Role",
  "fighting-hunger-community-kitchens": "Fighting Hunger through Community Kitchens",
  "providing-clean-water-rural-areas": "Providing Clean Water in Rural Areas",
  "healthcare-camps-for-underprivileged": "Healthcare Camps for the Underprivileged",
  "supporting-childrens-education-scholarships": "Supporting Children's Education with Scholarships",
  "empowering-youth-vocational-training": "Empowering Youth with Vocational Training",
  "environment-conservation-green-mission": "Environment Conservation: Our Green Mission",
  "women-empowerment-self-help-groups": "Women Empowerment through Self-Help Groups",
  "disaster-relief-emergency-response": "Disaster Relief and Emergency Response",
  "nutrition-programs-growing-children": "Nutrition Programs for Growing Children",
  "bridging-digital-divide": "Bridging the Digital Divide",
  "vocational-courses-women-entrepreneurs": "Vocational Courses for Women Entrepreneurs",
  "mental-health-awareness-campaigns": "Mental Health Awareness Campaigns",
  "building-homes-for-homeless": "Building Homes for the Homeless",
  "art-culture-programs-children": "Art and Culture Programs for Children",
  "accessible-healthcare-for-all": "Accessible Healthcare for All",
  "promoting-renewable-energy-villages": "Promoting Renewable Energy in Villages",
  "celebrating-volunteer-heroes": "Celebrating Our Volunteer Heroes",
};

const contentMap: Record<string, string> = {
  "how-education-changes-lives":
    "Education transforms lives by opening doors to better opportunities and equipping individuals with essential skills. It empowers people to think critically, solve problems, and make informed decisions. Through education, communities become stronger, more innovative, and more resilient. It is one of the most powerful tools to break the cycle of poverty and create lasting change.",
  "empowering-women-skill-development":
    "Our women empowerment programs provide skill-based training, financial literacy, and mentorship to help women build sustainable livelihoods. These initiatives foster confidence, independence, and leadership in both rural and urban communities. Women gain access to income-generating opportunities and start their own businesses. Empowering women transforms families and uplifts entire communities.",
  "sustainability-goals-and-our-role":
    "We are deeply committed to the UN’s Sustainable Development Goals (SDGs). Our efforts include promoting responsible consumption, protecting natural resources, and advocating for climate action. We collaborate with communities to adopt eco-friendly practices and raise awareness about environmental conservation. Sustainability is embedded in everything we do to ensure a healthier planet for future generations.",
  "fighting-hunger-community-kitchens":
    "Our community kitchens serve hot, nutritious meals to the underprivileged every day. These kitchens are lifelines for many, ensuring that no one in our reach goes to bed hungry. Volunteers, donors, and local partners come together to make this possible. In addition to food, we provide dignity, warmth, and hope to those in need.",
  "providing-clean-water-rural-areas":
    "Access to clean water is a basic human right, yet millions still lack it. We install water purification systems, borewells, and storage tanks in underserved rural areas. These initiatives drastically reduce waterborne diseases, improve hygiene, and save time—especially for women and children. Clean water transforms health and productivity in communities.",
  "healthcare-camps-for-underprivileged":
    "We organize free healthcare camps in remote and low-income areas to offer medical checkups, treatments, and essential medicines. These camps are staffed by compassionate doctors, nurses, and volunteers. They address preventable illnesses and promote health education. Our mission is to ensure everyone receives care, regardless of their financial status.",
  "supporting-childrens-education-scholarships":
    "Scholarships allow children from low-income families to continue their education without interruption. We identify bright, motivated students and support them with tuition, books, and mentorship. These opportunities unlock their full potential and pave the way to a brighter future. Education is the most impactful gift we can offer.",
  "empowering-youth-vocational-training":
    "We provide vocational training programs tailored to the job market’s needs. Youth receive hands-on experience in fields like tailoring, computing, electrical work, and more. They gain the skills needed to secure employment or start their own ventures. This fosters independence, reduces unemployment, and builds confident futures.",
  "environment-conservation-green-mission":
    "Our green mission promotes environmental sustainability through tree plantations, waste management, and public awareness. We conduct cleanup drives, educate communities, and collaborate on eco-projects. Every action, big or small, contributes to a healthier ecosystem. Our aim is to inspire individuals and institutions to care for the Earth.",
  "women-empowerment-self-help-groups":
    "Self-help groups bring women together to learn, save, and grow. These groups offer financial and emotional support, encourage entrepreneurship, and foster a spirit of collaboration. Women collectively raise their voices, take on leadership roles, and create a ripple effect of empowerment. Together, they shape resilient, thriving communities.",
  "disaster-relief-emergency-response":
    "During natural disasters and emergencies, we act quickly to provide food, shelter, and medical care. Our teams are trained to deliver rapid response and long-term recovery support. We work alongside local authorities to rebuild homes and restore livelihoods. Compassion and preparedness are at the heart of our response efforts.",
  "nutrition-programs-growing-children":
    "Proper nutrition is vital for a child’s physical and cognitive development. Our programs provide balanced meals, nutritional supplements, and health screenings to children in need. These efforts help fight malnutrition, improve concentration in school, and promote overall well-being. Every healthy meal supports a stronger future.",
  "bridging-digital-divide":
    "We aim to bridge the digital divide by providing underprivileged students with access to computers, internet, and digital literacy programs. Technology opens up new learning possibilities and prepares children for a connected world. Our initiatives ensure no child is left behind in the digital age. Education today must be inclusive and tech-enabled.",
  "vocational-courses-women-entrepreneurs":
    "Our vocational courses for women include training in tailoring, beauty, food processing, and more. Women learn to create business plans, manage finances, and market their products. We connect them with microloans and local markets. These initiatives transform homemakers into confident entrepreneurs contributing to their families and economies.",
  "mental-health-awareness-campaigns":
    "Mental health is as important as physical health, yet it remains stigmatized. We conduct awareness sessions, workshops, and counseling programs to educate and support individuals. By encouraging open conversations and providing access to help, we aim to reduce stigma. Everyone deserves mental well-being and compassionate care.",
  "building-homes-for-homeless":
    "We construct safe, permanent homes for families living in slums or on the streets. A secure shelter restores dignity and creates a foundation for a better life. These homes include sanitation, water, and basic facilities. Housing is more than bricks—it’s the first step toward stability and self-respect.",
  "art-culture-programs-children":
    "Children thrive when given creative outlets. Our art and culture programs include music, painting, dance, and drama. These activities enhance self-expression, build confidence, and preserve cultural heritage. Every child deserves a space to explore their talents and celebrate who they are.",
  "accessible-healthcare-for-all":
    "We believe in healthcare without barriers. Our outreach programs bring medical care to underserved communities through mobile clinics and partner hospitals. Services include screenings, vaccinations, and maternal care. Health is a right—not a privilege—and we work to make it available to everyone.",
  "promoting-renewable-energy-villages":
    "We bring solar panels, biogas systems, and energy-efficient solutions to rural communities. These clean energy sources reduce carbon footprints, lower energy costs, and improve daily life. Renewable energy empowers villages to grow sustainably. It’s a step toward a greener, more equitable future.",
  "celebrating-volunteer-heroes":
    "Our work wouldn’t be possible without our dedicated volunteers. They give their time, skills, and hearts to serve others. We celebrate their stories, contributions, and impact through events and features. Their selflessness inspires others to give back and build stronger communities.",
};

const BlogContent: React.FC<BlogContentProps> = ({ slug }) => {
  const title = titleMap[slug] || "Blog Post";
  const content = contentMap[slug] || "No content available for this blog.";

  return (
    <div className="text-gray-800 mt-6">
      <div className="text-center p-8 md:p-12 lg:px-28 py-10 xl:px-40">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-orange-600">{title}</h1>
        <p className="text-black tracking-widest leading-7" style={{ fontFamily: "Poppins, sans-serif" }}>{content}</p>
      </div>
     
    </div>
  );
};

export default BlogContent;

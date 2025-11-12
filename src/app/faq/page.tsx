import { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ - Common Questions About ABA Therapy & Autism Services',
  description: 'Get answers to frequently asked questions about ABA therapy, autism services, insurance coverage, therapy sessions, and getting started with Ability Avenues in Minneapolis.',
  openGraph: {
    title: 'FAQ - Common Questions About ABA Therapy & Autism Services',
    description: 'Get answers to frequently asked questions about ABA therapy, autism services, insurance coverage, and getting started with Ability Avenues.',
    url: 'https://abilityavenues.com/faq',
    siteName: 'Ability Avenues',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ability Avenues - ABA Therapy in Minneapolis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Common Questions About ABA Therapy & Autism Services',
    description: 'Get answers to frequently asked questions about ABA therapy, autism services, and getting started with Ability Avenues.',
    images: ['/images/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://abilityavenues.com/faq',
  },
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://abilityavenues.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'FAQ',
                item: 'https://abilityavenues.com/faq',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is ABA therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Applied Behavior Analysis (ABA) is a scientific approach to understanding and changing behavior. It focuses on teaching meaningful skills and reducing challenging behaviors through evidence-based techniques. ABA therapy is highly individualized and adapts to each child\'s unique needs and learning style. We offer both in-home therapy and center-based therapy options to meet your family\'s needs.',
                },
              },
              {
                '@type': 'Question',
                name: 'What ages do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide services for children and teens ages 1-18. Our programs are tailored to meet the developmental needs of each age group, ensuring age-appropriate goals and activities.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you accept insurance?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we accept most major insurance plans. We work directly with insurance companies to verify benefits and handle billing. Our team will help you understand your coverage and any potential out-of-pocket costs during the intake process.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is center-based therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Center-based therapy takes place in our specialized facility designed specifically for ABA services. It provides a structured learning environment with access to specialized equipment, peer interaction opportunities, and a team of professionals working together to support your child\'s development.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between in-home and center-based therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In-home therapy brings ABA services directly to your home, offering flexibility and the ability to practice skills in your child\'s natural environment with family involvement. Center-based therapy takes place in our specialized facility and provides structured peer interactions, specialized equipment, and a distraction-free learning environment. Both options offer individualized treatment plans supervised by BCBAs. The choice depends on your child\'s needs, family schedule, and learning preferences. Our team can help you determine which option is best for your family during the intake process.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get started?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Getting started is easy! Contact us to schedule an initial consultation. We\'ll discuss your child\'s needs, answer your questions, and guide you through our intake process. This includes insurance verification, assessment scheduling, and creating a customized treatment plan.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I expect during the first visit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'During the first visit, you\'ll meet with our clinical team for a comprehensive assessment. We\'ll observe your child, gather information about their strengths and challenges, and discuss your family\'s goals. This helps us create an individualized treatment plan tailored to your child\'s needs. Learn more about our intake process to understand what to expect.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long are therapy sessions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Session length varies based on each child\'s individualized treatment plan and recommendations from our clinical team. Typical sessions range from 4-8 hours per day, depending on your child\'s needs, goals, and insurance coverage.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can parents observe therapy sessions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Family involvement is crucial to our approach. Parents are welcome to observe sessions and will receive regular updates on their child\'s progress. We also provide parent training to help you implement strategies at home and support your child\'s continued development.',
                },
              },
              {
                '@type': 'Question',
                name: 'What qualifications do your therapists have?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our team includes Board Certified Behavior Analysts (BCBAs), Board Certified Assistant Behavior Analysts (BCaBAs), and Registered Behavior Technicians (RBTs). All staff members undergo rigorous training and maintain current certifications. We\'re committed to ongoing professional development to provide the highest quality care.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you measure progress?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We use data-driven methods to continuously track progress toward individualized goals. Regular assessments, behavioral data collection, and progress reports keep families informed. Our team reviews data regularly to adjust treatment plans and ensure your child is making meaningful progress.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does an individualized treatment plan look like?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Board Certified Behavior Analyst develops a treatment plan that focuses on your child\'s goals and needs. It uses information from diagnostic records, any past therapy, the CMDE, a parent interview, and direct observation. The plan sets clear goals for skill building and behavior support. It is updated often as progress happens or needs change. A full review takes place every six months with another observation and parent interview. Families receive updates so you always know what your child is working on and why. Learn more about how we develop these plans during our intake process.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a CMDE?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A CMDE is a Comprehensive Multidisciplinary Evaluation used in Minnesota for children receiving EIDBI services. It confirms a diagnosis related to autism or a related condition. A CMDE provider completes the evaluation, such as an LICSW, LPCC, LMFT, or an Advanced Practice Registered Nurse. They complete training to run the assessment and confirm medical necessity for ABA services. The CMDE includes review of records, parent input, and observation of the child. It guides decisions for services and provides the information needed to build an individualized treatment plan.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are Ability Avenues therapy hour expectations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Families agree to a weekly schedule of about 20 to 40 hours of ABA therapy based on clinical recommendations from our team. We use a soft minimum of 20 hours. This means we expect an average of at least 20 hours each week over a three month period. Some weeks might fall below that number because of appointments or family needs. That is fine if the quarter still averages at 20 hours. This approach supports steady progress for your child while allowing reasonable flexibility. Parents with questions receive guidance from our clinical leadership and can review Minnesota DHS resources on recommended treatment intensity for children with autism.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is EIDBI versus ABA?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'EIDBI is a Minnesota program through Medical Assistance that pays for therapy for children and young people under 21 with autism or related conditions. ABA is one of the approved therapies inside the EIDBI program. Other approaches include DIR, Early Start Denver Model, and Relationship Development Intervention. Families receive a treatment plan based on goals that fit the child, and the provider selects the approach that best supports those goals. EIDBI pays for services when the treatment meets Medical Assistance rules for medical necessity. Minnesota families find more details on the DHS Early Intensive Developmental and Behavioral Intervention webpage and the Minnesota Autism Resource Portal.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you get MA-TEFRA coverage for ABA services if your family income is over the limit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'MA-TEFRA allows a child with a qualifying disability to receive Medical Assistance based on the child\'s income only, which often helps families who do not meet regular MA income limits. Parents start by applying for Medical Assistance through MNsure or with the DHS 6696 form, then request TEFRA if income stops regular approval. The county reviews disability needs through a process called SMRT and once approved, MA-TEFRA pays for covered services including ABA with no parental fees. Families reach out to their county or tribal agency for help and Minnesota DHS provides step-by-step information on its MA-TEFRA webpage.',
                },
              },
            ],
          }),
        }}
      />
      <FAQ />
    </>
  );
}
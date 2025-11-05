'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import centerBasedHeroImage from '@/assets/center-based-vs-in-home-blog-cover.jpg';

const CHECKLIST_STORAGE_KEY = 'aba-decision-checklist';

const InHomeVsCenterPost = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'home-routines': false,
    'school-readiness': false,
    'transitions-hard': false,
    'intensive-learning': false,
    'schedule-flexibility': false,
    'hybrid': false,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <article className="max-w-4xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48 lg:pb-20">
          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raisin-black mb-6 leading-tight">
              What's the Difference Between In-Home and Center-Based ABA Therapy?
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground mb-8">
              <span className="text-base">Ability Avenues Team</span>
              <span>•</span>
              <time dateTime="2025-11-05" className="text-base">November 5, 2025</time>
            </div>
            <p className="text-lg text-gray-700 italic leading-relaxed">
              For families sorting through options, here's a clear, parent-first guide to how ABA can look at home versus in a center—and how to choose what's right for your child, your schedule, and your goals.
            </p>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <Image
              src={centerBasedHeroImage}
              alt="In-Home vs Center-Based ABA Therapy"
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Quick Overview */}
            <div className="bg-pacific-cyan/10 border-l-4 border-pacific-cyan p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-raisin-black mb-4">Quick overview (what this post covers)</h2>
              <p className="text-raisin-black">
                You'll learn what happens in each setting, the pros and cons, who typically thrives where, how insurance/logistics differ, and a simple decision checklist. We'll keep it plain-English and focused on your day-to-day reality.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* In-Home ABA Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What "in-home ABA" looks like</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                In-home ABA brings therapy to you. A behavior technician (BT/RBT) works with your child in your natural routines—mornings before school, after school, evenings, or weekends depending on availability. A supervising clinician (often a BCBA) designs the plan, coaches the team and caregivers, and monitors progress.
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">What families often like</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li><strong>Real-life practice</strong> in your kitchen, playroom, or backyard—skills generalize quickly to meals, chores, sibling time, and bedtime.</li>
                <li><strong>Parent/caregiver coaching</strong> built into sessions so strategies fit your family's routines.</li>
                <li><strong>Comfort & reduced transitions</strong> for kids who struggle with new environments or longer car rides.</li>
              </ul>

              <h3 className="text-2xl font-bold text-raisin-black mb-4">Potential trade-offs</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li><strong>Distractions at home</strong> (siblings, toys, pets) can pull focus without a strong session structure.</li>
                <li><strong>Space & consistency</strong>—you'll want a predictable therapy spot with materials ready.</li>
                <li><strong>Scheduling</strong>—coverage can be tighter in certain neighborhoods or time slots.</li>
              </ul>

              <h3 className="text-2xl font-bold text-raisin-black mb-4">Common goals worked on in-home</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Following routines (getting dressed, toothbrushing, packing backpack)</li>
                <li>Mealtime skills and flexibility</li>
                <li>Play and leisure skills with siblings</li>
                <li>Communication during everyday requests</li>
                <li>Safety skills at the door, driveway, or park</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Center-Based ABA Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What "center-based ABA" looks like</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Center-based ABA happens at a clinic designed for therapy: dedicated rooms, teaching materials, simulated classroom spaces, and opportunities for small-group learning.
              </p>

              <h3 className="text-2xl font-bold text-raisin-black mb-4 mt-8">What families often like</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li><strong>Low-distraction learning zones</strong> for acquiring new skills quickly.</li>
                <li><strong>Peer exposure</strong> and supported social practice (circle time, turn-taking, waiting).</li>
                <li><strong>Predictable routines</strong>—same room, same schedule, clear visual supports.</li>
              </ul>

              <h3 className="text-2xl font-bold text-raisin-black mb-4">Potential trade-offs</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
                <li><strong>Transitions</strong> to/from the center; some children fatigue with travel.</li>
                <li><strong>Generalization</strong>—skills learned in a clinic may still need practice at home.</li>
                <li><strong>Set hours</strong>—less flexible than home for certain family schedules.</li>
              </ul>

              <h3 className="text-2xl font-bold text-raisin-black mb-4">Common goals worked on in-center</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>School-like routines (group time, stations, lining up, requesting help)</li>
                <li>Tolerating new environments and adult directions</li>
                <li>Early academics & pre-academic readiness</li>
                <li>Group social play with coaching</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">At a glance: side-by-side comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 my-8">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-bold text-raisin-black">Factor</th>
                      <th className="border border-gray-300 p-4 text-left font-bold text-raisin-black">In-Home ABA</th>
                      <th className="border border-gray-300 p-4 text-left font-bold text-raisin-black">Center-Based ABA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Setting</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Your home & neighborhood</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Structured clinic environment</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Best for</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Generalizing skills into daily routines; children who need familiar surroundings</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Rapid skill acquisition in a low-distraction space; school readiness; peer practice</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Parent role</td>
                      <td className="border border-gray-300 p-4 text-gray-700">High—coaching woven into sessions</td>
                      <td className="border border-gray-300 p-4 text-gray-700">High—formal parent training + carryover plans</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Social opportunities</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Siblings & community</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Planned peer interactions and small groups</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Flexibility</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Often more flexible scheduling</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Typically set session blocks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Transitions</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Minimal</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Requires travel & drop-off/pick-up</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-800">Generalization</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Built-in to real life</td>
                      <td className="border border-gray-300 p-4 text-gray-700">Often needs planned home carryover</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* How to Choose Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">How to choose: five questions to guide your decision</h2>
              <ol className="list-decimal pl-6 space-y-6 text-lg text-gray-700">
                <li>
                  <strong>Where will the skill be used most?</strong><br />
                  If your top goals are morning routines, mealtimes, sibling play, or bedtime—<Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> is a natural match. If your top goals are school readiness, group participation, and low-distraction learning—<Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center</Link> often shines.
                </li>
                <li>
                  <strong>How does your child respond to new places and transitions?</strong><br />
                  Kids who are dysregulated by transitions may benefit from starting <strong>in-home</strong>. Kids who enjoy "going to school" or thrive on structured spaces may love <strong>center</strong>.
                </li>
                <li>
                  <strong>What does your schedule allow right now?</strong><br />
                  If after-school is the only window, <strong>in-home</strong> may fit. If you can do longer morning/afternoon blocks, <strong>center</strong> opens options (and sometimes faster skill bursts).
                </li>
                <li>
                  <strong>What support do you want as a caregiver?</strong><br />
                  Prefer real-time coaching in your kitchen or living room? Choose <strong>in-home</strong>. Want a more class-like model with planned parent trainings and then at-home practice? <strong>Center</strong> may fit better.
                </li>
                <li>
                  <strong>Where has your child succeeded before?</strong><br />
                  Use past wins to guide the starting environment. You can always <strong>blend</strong> settings later.
                </li>
              </ol>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Mix Both Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">Can you mix both? (Yes—many families do.)</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A common path is <strong>hybrid care</strong>: <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based</Link> sessions for structured learning + <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> sessions to generalize results (especially for routines, siblings, or community safety). Blending can also help with staffing/schedule coverage and keep motivation high.
              </p>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Insurance Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">Insurance, access, and practical notes (MN-specific)</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li>Many Minnesota families access ABA through <strong>Medical Assistance (MA)</strong> and the <Link href="/eidbi" className="text-pacific-cyan hover:underline font-medium">EIDBI</Link> benefit, or via commercial insurance. Coverage details vary by plan and diagnosis—your intake team will walk you through the specifics and authorizations.</li>
                <li><strong>Transportation & time</strong> matter. If a long commute will drain your child before sessions even begin, consider starting <strong>in-home</strong> or a center closer to your neighborhood.</li>
                <li><strong>Waitlists</strong> can differ by setting. If your preferred option has a longer wait, ask about starting in the other setting or a hybrid plan so progress doesn't pause.</li>
              </ul>
              <blockquote className="border-l-4 border-xanthous bg-xanthous/10 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-raisin-black italic">
                  <em>This section is informational only; it isn't insurance or legal advice. We'll go over your exact coverage and options during intake.</em>
                </p>
              </blockquote>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Progress Timeline Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">What progress usually looks like in the first 30–60 days</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li><strong>Week 1–2:</strong> Relationship building ("pairing"), learning preferences, setting up visuals/routines, first quick wins.</li>
                <li><strong>Week 3–4:</strong> Target skills are practiced daily; parent coaching begins to feel natural.</li>
                <li><strong>Week 5–8:</strong> We start to see more consistent independence with early goals; data shows what's working; plan adjusts.</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Parents Can Help Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">How parents can help—simple, high-impact actions</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li><strong>Pick 1–2 priority routines</strong> (e.g., backpack → snack → homework timer) and keep them the same every day.</li>
                <li><strong>Celebrate tiny wins</strong> out loud; specific praise speeds learning.</li>
                <li><strong>Use the same words</strong> your therapy team uses for cues and expectations.</li>
                <li><strong>Snap quick notes</strong> between sessions (what worked, what didn't)—these become coaching gold.</li>
              </ul>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Real Scenarios Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">Real scenarios (examples)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-3">Scenario A: After-school chaos</h3>
                  <p className="text-lg text-gray-700">
                    Your 7-year-old melts down between school pickup and dinner. <strong>In-home</strong> sessions 3–5 pm target snack routine, movement break, homework starter, and flexible play with a sibling. Parent coaching focuses on visual schedules and calm prompts.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-3">Scenario B: Kindergarten readiness</h3>
                  <p className="text-lg text-gray-700">
                    Your 5-year-old is bright but avoids group time and waiting. <strong>Center-based</strong> mornings build stamina for circle time, transitions, and requesting help. You practice the same routines at home with a short visual schedule.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-3">Scenario C: Safety & community</h3>
                  <p className="text-lg text-gray-700">
                    Your 9-year-old elopes in parking lots. <strong>Hybrid</strong>: center for concentrated instruction on response to name and waiting; <strong>in-home/community</strong> to generalize in your driveway, sidewalk, and grocery store.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Decision Checklist Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">Decision checklist (print or save)</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="home-routines"
                    checked={checkedItems['home-routines']}
                    onCheckedChange={(checked) => handleCheckboxChange('home-routines', checked === true)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="home-routines"
                    className="cursor-pointer flex-1 leading-relaxed font-normal text-lg"
                  >
                    Our top 2–3 goals are mostly <strong>home routines</strong> → start in-home
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="school-readiness"
                    checked={checkedItems['school-readiness']}
                    onCheckedChange={(checked) => handleCheckboxChange('school-readiness', checked === true)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="school-readiness"
                    className="cursor-pointer flex-1 leading-relaxed font-normal text-lg"
                  >
                    Our top 2–3 goals are <strong>school readiness/peer skills</strong> → start center
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="transitions-hard"
                    checked={checkedItems['transitions-hard']}
                    onCheckedChange={(checked) => handleCheckboxChange('transitions-hard', checked === true)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="transitions-hard"
                    className="cursor-pointer flex-1 leading-relaxed font-normal text-lg"
                  >
                    Transitions are hard right now → start in-home (add center later)
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="intensive-learning"
                    checked={checkedItems['intensive-learning']}
                    onCheckedChange={(checked) => handleCheckboxChange('intensive-learning', checked === true)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="intensive-learning"
                    className="cursor-pointer flex-1 leading-relaxed font-normal text-lg"
                  >
                    We want intensive, low-distraction learning → center makes sense
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="schedule-flexibility"
                    checked={checkedItems['schedule-flexibility']}
                    onCheckedChange={(checked) => handleCheckboxChange('schedule-flexibility', checked === true)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="schedule-flexibility"
                    className="cursor-pointer flex-1 leading-relaxed font-normal text-lg"
                  >
                    We need schedule flexibility → in-home may open more windows
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="hybrid"
                    checked={checkedItems['hybrid']}
                    onCheckedChange={(checked) => handleCheckboxChange('hybrid', checked === true)}
                    className="mt-1"
                  />
                  <Label
                    htmlFor="hybrid"
                    className="cursor-pointer flex-1 leading-relaxed font-normal text-lg"
                  >
                    We want both quick acquisition <strong>and</strong> home carryover → hybrid
                  </Label>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">FAQs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Is one setting "better"?</h3>
                  <p className="text-lg text-gray-700">
                    No—each has strengths. The "best" is the one that matches your child's current needs and your family's reality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Can we switch later?</h3>
                  <p className="text-lg text-gray-700">
                    Absolutely. Many families change settings as goals evolve (e.g., start in-home, move to center for school readiness, then return to in-home for generalization).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-raisin-black mb-2">Will my insurance cover both?</h3>
                  <p className="text-lg text-gray-700">
                    Coverage depends on your plan and authorizations. We'll verify benefits and talk through options during intake.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-gray-300" />

            {/* Ability Avenues Section */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-raisin-black mb-6">How Ability Avenues can help</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We offer <Link href="/in-home-therapy" className="text-pacific-cyan hover:underline font-medium">in-home</Link> and <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">center-based</Link> ABA and can design a <strong>hybrid</strong> plan if that's the best fit. During intake, we'll review your goals, schedule, and coverage, then recommend a setting (or blend) designed for fast, meaningful progress in your real life.
              </p>
              
              <h3 className="text-xl font-bold text-raisin-black mb-4">Next steps</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                <li>Start a conversation: <Link href="/contact" className="text-pacific-cyan hover:underline font-medium">Contact us</Link></li>
                <li>Ready to refer? <Link href="/referrals" className="text-pacific-cyan hover:underline font-medium">Submit a referral</Link></li>
                <li>Curious about our approach? <Link href="/center-based-therapy" className="text-pacific-cyan hover:underline font-medium">See ABA Services</Link></li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InHomeVsCenterPost;

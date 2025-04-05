export default function SummaryPage() {
    const summary = `The Q2 planning meeting focused on reviewing Q1 achievements, discussing product direction for the next quarter, and prioritizing improvements in user retention and mobile onboarding. Marketing initiatives and budget allocations were also discussed.`;
  
    const actionItems = [
      { task: "Prepare onboarding UX audit report", owner: "Claire", due: "April 10" },
      { task: "Allocate marketing budget for Q2 campaigns", owner: "Bob", due: "April 15" },
      { task: "Schedule team sync on product roadmap", owner: "Alice", due: "April 12" }
    ];
  
    return (
      <section className="min-h-screen p-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">Meeting Summary</h2>
          <div className="bg-white/5 p-6 rounded-xl text-gray-300 whitespace-pre-wrap">
            {summary}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2 text-white">Action Items</h2>
          <div className="bg-white/5 p-6 rounded-xl text-gray-300 space-y-3">
            {actionItems.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>✅ {item.task}</span>
                <span className="text-sm text-gray-400">{item.owner} – Due {item.due}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
import { CircleCheck } from "lucide-react";

const stories = [
  {
    id: 1,
    image:
      "https://placehold.co/400x300/facc15/000000?text=Chowdeck+x+Combinator",
    title: "CHOWDECK JOINS Y COMBINATOR'S S'22 BATCH",
    text: "Chowdeck has been accepted to Y Combinator's Summer Batch 2022, joining a league of extraordinary companies that are dis...",
  },
  {
    id: 2,
    image: "https://placehold.co/400x300/a78bfa/000000?text=Kingsley",
    title: "CHAMPIONS: KINGSLEY AGBINYA",
    text: "Kingsley, a rider who got promoted to an associate talks about his journey and the biggest change in his life since he j...",
  },
  {
    id: 3,
    image: "https://placehold.co/400x300/1f2937/ffffff?text=Anthony",
    title: "CHAMPIONS: ANTHONY AGAM",
    text: "Anthony a.k.a Spider, a Senior Man, shares his life-changing experience and most memorable delivery with Chowdeck.",
  },
];

function StoryCard({ story }) {
  return (
    <div className="w-80 h-[420px] rounded-xl border border-gray-200 overflow-hidden flex flex-col">
      {/* Image - fixed height */}
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-48 object-cover shrink-0"
      />

      {/* Text content - fills remaining space, text clamped so it never overflows */}
      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        <h3 className="text-sm font-bold text-center mb-2 line-clamp-2">
          {story.title}
        </h3>
        <p className="text-sm text-gray-600 text-center line-clamp-4">
          {story.text}
        </p>
      </div>

      {/* Read More button - fixed at bottom */}
      <button className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-green-700 font-semibold py-3 text-center transition-colors shrink-0">
        Read More
      </button>
    </div>
  );
}

export default function Stories() {
  return (
    <section className="mt-26 w-full px-6">
      <div className="flex gap-4 items-center mb-8">
        <p className="text-5xl font-bold">Stories</p>
        <CircleCheck size={48} />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}

import Navigation from "../Navigation";

export default function NavigationExample() {
  return (
    <div className="relative h-96 bg-gradient-to-b from-gray-900 to-gray-700">
      <Navigation />
      <div className="pt-20 px-6 text-white">
        <p className="text-sm text-white/60">Scroll down to see nav background change</p>
      </div>
    </div>
  );
}

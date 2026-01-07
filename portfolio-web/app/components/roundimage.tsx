import Image from 'next/image';

const RoundedImageWithBorder = () => {
  return (
    // The wrapper div handles the sizing, border radius, stroke, and overflow
    <div className="relative h-60 w-60 overflow-hidden rounded-xl mx-auto">
      <Image
        src="/me.png" // Replace with your image path
        alt="Descriptive alt text"
        fill // 'fill' makes the image size to its parent
        className="object-cover" // 'object-cover' ensures the image covers the div without stretching
      />
    </div>
  );
};

export default RoundedImageWithBorder;
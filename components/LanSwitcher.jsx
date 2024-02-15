import { Button } from "./ui/button";

const LanSwitcher = () => {
  return (
    <div>
      <Button
        variant="outline"
        className='rounded-md px-3 py-1 font-semibold secondary-font text-lg'
        size='small'
      >
        🇫🇷 Français
      </Button>
    </div>
  );
};

export default LanSwitcher;

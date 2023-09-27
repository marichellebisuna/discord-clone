import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='flex gap-5'>
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
    </div>
  );
}

import {GanttChartSquare, Blocks, Gem} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'


const servieData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, eius?'
    }

]

const Services = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title'>My Services</h2>
            </div>
        </section>
    )
}

export default Services

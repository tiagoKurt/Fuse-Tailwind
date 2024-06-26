/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'PrintScreen',
        title: 'PrintScreen',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/printTela'
    },
    {
        id: 'analise.riscos',
        title: 'Riscos',
        type: 'collapsable',
        icon: 'heroicons_outline:presentation-chart-line',
        children :[
            {
                id   : 'Riscos',
                title: 'Riscos',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-line',
                link : '/risco'
            },
            {
                id   : 'teste',
                title: 'example',
                type : 'basic',
                icon : 'heroicons_outline:presentation-chart-line',
                link : '/example'
            }
 
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

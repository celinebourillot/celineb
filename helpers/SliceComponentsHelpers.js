import dynamic from 'next/dynamic';
import HeroSlice from '../components/slices/HeroSlice';
import USPSlice from '../components/slices/USPSlice';
import LogoSlice from '../components/slices/LogoSlice';
import CTASlice from '../components/slices/CTASlice';
import ContentSlice from '../components/slices/ContentSlice';
import RelatedContentSlice from '../components/slices/RelatedContentSlice';
import TestimonialsSlice from '../components/slices/TestimonialsSlice';

export const sliceComponentsHelper = (slices) => {
    let componentsToDisplay = [];
    componentsToDisplay = (!slices || !slices.length) ? null : slices.map((slice, index) => {
        if (slice === null || !slice.acf_fc_layout) return ''
        if (slice.acf_fc_layout === 'hero_cta_module') return <HeroSlice key={index} data={slice}/>
        if (slice.acf_fc_layout === 'usp_module') return <USPSlice key={index} data={slice}/>
        if (slice.acf_fc_layout === 'logo_module') return <LogoSlice key={index} data={slice}/>
        if (slice.acf_fc_layout === 'cta_block') return <CTASlice key={index} data={slice}/>
        if (slice.acf_fc_layout === 'content_block') return <ContentSlice key={index} data={slice}/>
        if (slice.acf_fc_layout === 'testimonials_module') return <TestimonialsSlice key={index} data={slice}/>
        if (slice.acf_fc_layout === 'related_content') return <RelatedContentSlice key={index} data={slice}/>
    })
    return componentsToDisplay;
}

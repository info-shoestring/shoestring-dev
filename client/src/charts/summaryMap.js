import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SummaryMapChoropleth = ({ data /* see data tab */ }) => (
    <ResponsiveChoropleth
        data={data}
        features="/* please have a look at the description for usage */"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={106}
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ -163, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 22,
                translateY: -23,
                itemsSpacing: 0,
                itemWidth: 95,
                itemHeight: 25,
                itemDirection: 'right-to-left',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 19,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

export default SummaryMapChoropleth;
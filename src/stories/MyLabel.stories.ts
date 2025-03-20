import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: 'inline-radio',
        },
        fontColor: {
            control: 'color'
        }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>


export const Basic: Story= {
    args:{
        label: 'Label',
        size: 'h1'
    }
};

export const AllCaps: Story= {
    args:{
        label: 'All Caps Label',
        size: 'normal',
        allCaps: true
    }
};

export const Sedondary: Story= {
    args:{
        label: 'Scondary Label',
        size: 'h2',
        color: 'text-secondary'
    }
};

export const CustomColor: Story= {
    args:{
        label: 'Custom Color Label',
        size: 'h3',
        fontColor: '#5517ac'
    }
};
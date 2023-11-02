const ScreenSize = 
{
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px'
};

export const DeviceType = 
{
    mobileSmall : `(max-width: ${ScreenSize.mobileS})`,
    mobileMedium : `(max-width: ${ScreenSize.mobileM})`,
    mobileLarge : `(max-width: ${ScreenSize.mobileL})`,
    tablet : `(max-width: ${ScreenSize.tablet})`,
    laptop : `(max-width: ${ScreenSize.laptop})`,
    desktop : `(max-width: ${ScreenSize.desktop})`
};
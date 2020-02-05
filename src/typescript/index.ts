
    import * as bz from './de/mayflower/bz';

    /** ****************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = () : void  =>
    {
        bz.Main.main();
    };

    /** ****************************************************************************************************************
    *   Being invoked when the page is left.
    *******************************************************************************************************************/
    window.onunload = () : void  =>
    {
        // no actions required on leaving website
    };

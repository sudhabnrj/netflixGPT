import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const NextArrow = ({ onClick }) => {
    return(
        <div className="bg-black bg-opacity-50 hover:bg-opacity-85 rounded-0 w-10 h-full text-slate-200 
        flex items-center justify-center cursor-pointer absolute top-0 right-0 z-20" onClick={onClick}>
            <div className="flex justify-center items-center w-8 h-8">
                <ArrowForwardIosOutlinedIcon/>
            </div>
        </div>
    );
}
export default NextArrow;
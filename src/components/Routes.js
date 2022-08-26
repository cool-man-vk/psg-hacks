import { Route, Routes } from "react-router-dom";
import Mnist from './screens/Mnist';
import PaintToImage from "./screens/PaintToImage";
import StoryGen from "./screens/StoryGen";
import Home from './screens/Home';


const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story-generator" element={<StoryGen />} />
            <Route path="/paint-to-image" element={<PaintToImage />} />
            <Route path="/mnist" element={<Mnist />} />
        </Routes >
    );
}
export default routes;
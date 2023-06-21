import { Base } from "./base";
import { Movies } from "./movie";
import { Quotes } from "./quote";
import { applyMixins } from "./utils";

class RingsSDK extends Base {}
interface RingsSDK extends Movies {}
interface RingsSDK extends Quotes {}

applyMixins(RingsSDK, [Movies, Quotes]);

export default RingsSDK;
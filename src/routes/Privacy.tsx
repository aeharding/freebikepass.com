import { ReactComponent as Email } from "./email.svg";

export default function Privacy() {
  return (
    <>
      <h3>Privacy Policy</h3>

      <p>
        No information is ever collected, transmitted, or stored on this
        website. The information you provide is used to generate a PDF document
        that you then download and email to the county.
      </p>

      <p>This is a static website. There is no tracking.</p>

      <p>
        <em>Last Updated: January 21st, 2022.</em>
      </p>

      <h3>Terms of Use</h3>

      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>

      <p>
        <em>Last Updated: January 21st, 2022.</em>
      </p>

      <h3>Contact</h3>

      <p>
        <Email />
      </p>
    </>
  );
}

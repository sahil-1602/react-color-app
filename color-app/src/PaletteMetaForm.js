import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from 'emoji-mart';
import "emoji-mart/css/emoji-mart.css";


class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage:"form",
            newPaletteName:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }

    showEmojiPicker() {
        this.setState({stage:"emoji"})
    }

    savePalette(emoji) {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }

    render() {
        const { handleClose } = this;
        const { stage, newPaletteName } = this.state;
        const { hideForm, handleSubmit } = this.props;
        return (
            <div>
                <Dialog open={stage === "emoji"} onClose={hideForm}>
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker title="Pick a Palette Emoji" onSelect={this.savePalette}/>
                </Dialog>
                <Dialog open={stage === "form"} onClose={handleClose} aria-labelledby="form-dialog-title"
                    onClose={hideForm}
                >
                <DialogTitle id="form-dialog-title">Pick a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={this.showEmojiPicker}>
                    <DialogContent>
                    <DialogContentText>
                        Please enter a name for your new Palette. Make Sure it's Unique!
                    </DialogContentText>
                    <TextValidator
                        label='Palette Name'
                        value={newPaletteName}
                        name='newPaletteName'
                        fullWidth
                        margin="normal"
                        onChange={this.handleChange}
                        validators={["required", "isPaletteNameUnique"]}
                        errorMessages={["Enter Palette Name", "Name already used"]}
                    />
                                
                        
                    </DialogContent>
                        <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>
                            Save Palette
                        </Button>
                        </DialogActions>
                    </ValidatorForm>
              </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;

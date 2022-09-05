import { updateComment, updateReply } from "../api/api";

export const updateVotes = (comment, score) => {
    const id = comment.id;
    const update = { score }

    if (!comment.replyingTo) {
        return updateComment(id, update).then(({ data }) => {
            return data;
        }).catch(err => err);
    } else {
        return updateReply(id, update).then(({ data }) => {
            return data;
        }).catch(err => err);
    }
}
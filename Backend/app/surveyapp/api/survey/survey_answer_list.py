from flask_restplus import Resource, fields
from surveyapp import repositories, extensions
from . import ns


survey_answer_stat = ns.model(
    name="Survey Answer Stat",
    model={
        'total': fields.Integer,
        'data': fields.List(fields.String)
    }
)


@ns.route('/<string:survey_id>/allAnswers')
class SurveyAnswerList(Resource):
    @ns.marshal_with(survey_answer_stat)
    def get(self, survey_id):
        survey = repositories.survey_form.find_survey_by_id(survey_id)
        if not survey:
            raise extensions.exceptions.NotFoundException(
                message="Not found survey"
            )
        else:
            result = repositories.survey_answer.get_all_survey_answer(survey_id)
            return result

